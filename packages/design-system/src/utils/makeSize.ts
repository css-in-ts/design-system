import { em, rem, modularScale } from "polished";

import { Size } from "../types/primitive";
import { SizeUnits, SizeHeadings, SizeProperties } from "../types/composite";

import { sizeConfig, fontConfig } from "../configs";

type Sizes = { [key in Size]: string };
type SizeFn = (size: Size) => string;

type SizeMapValues = {
  [key in Size]: { [key in SizeUnits]: string };
};

interface SizeMap {
  size: SizeMapValues;
  fontSize: SizeMapValues;
  lineHeight: SizeMapValues;
}

type SnapToGrid = (
  fontSize: string,
  baselineGrid: number,
  options?: { multiplier: number }
) => string;

const sizeUnitArr: SizeUnits[] = ["em", "px", "rem"];
const sizeArr = Object.keys(sizeConfig.fontSizeScaleMap);

const snapToGrid: SnapToGrid = (fontSize, baselineGrid, options) => {
  const sep = fontSize.split(/(em|rem|px)/g);
  const value = Number(sep[0]);
  const transformedValue = options?.multiplier
    ? value * options.multiplier
    : value;
  const snappedValue =
    Math.round(transformedValue / baselineGrid) * baselineGrid;
  const units = sep[1];
  return `${snappedValue}${units}`;
};

type ConvertToUnits = (value: string | number, unit?: SizeUnits) => string;

export const convertToUnits: ConvertToUnits = (
  value,
  unit = sizeConfig.sizeUnits
): string => {
  if (unit === "em") return em(value, sizeConfig.documentFontSize);
  if (unit === "rem") return rem(value, sizeConfig.documentFontSize);
  return value as string;
};

const createSizeUnitMap = (sizeFn: SizeFn) =>
  sizeArr.reduce(
    (sAccum, size) => ({
      ...sAccum,
      [size]: sizeUnitArr.reduce(
        (uAccum, unit) => ({
          ...uAccum,
          [unit]: convertToUnits(sizeFn(size as Size), unit)
        }),
        {}
      )
    }),
    {}
  );

const createSizes = () => {
  // this could obviously be better, but this was done for debugging purposes

  // 0. TBD - Determines type of design system that needs to be in place
  // default option =  baselineGrid w. modular scale

  // 1. adjust base font to align to snap to the grid
  const adjustedBaseFontSize = snapToGrid(
    sizeConfig.baseFontSize,
    sizeConfig.baselineGrid
  );
  // if (__DEV__) console.log("adjustedBaseFontSize", adjustedBaseFontSize);

  // 2. create font size map based upon adjustedBaseFont
  const modularScaleFontSizeMap = Object.entries(
    sizeConfig.fontSizeScaleMap
  ).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [key]: modularScale(
        value,
        adjustedBaseFontSize,
        sizeConfig.modularScaleRatio
      )
    }),
    {} as Sizes
  );
  // if (__DEV__) console.log("modularScaleFontSizeMap", modularScaleFontSizeMap);

  // 3. round font size map to factor
  const snappedFontSizeMap = Object.entries(modularScaleFontSizeMap).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [key]: snapToGrid(value, sizeConfig.baselineGrid)
    }),
    {} as Sizes
  );
  // if (__DEV__) console.log("snappedFontSizeMap", snappedFontSizeMap);

  // 4. create line height size map based upon adjustedFontBase
  const snappedLineHeightMap = Object.entries(modularScaleFontSizeMap).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [key]: snapToGrid(value, sizeConfig.baselineGrid, {
        multiplier: sizeConfig.lineHeight
      })
    }),
    {} as Sizes
  );
  // if (__DEV__) console.log("snappedLineHeightMap", snappedLineHeightMap);

  return {
    size: createSizeUnitMap(
      size => snappedLineHeightMap[size]
    ) as SizeMap["size"],
    lineHeight: createSizeUnitMap(
      size => snappedLineHeightMap[size]
    ) as SizeMap["lineHeight"],
    fontSize: createSizeUnitMap(
      size => snappedFontSizeMap[size]
    ) as SizeMap["fontSize"]
  };
};

export const createCustomSize = (customSize: string | number) => {
  console.warn(
    "You're using a custom size that falls outside the boundaries of the design system. All future updates to the design system will not have an affect on this value and instead will have to be manually changed or adjusted. Use with caution."
  );
  return customSize as string;
};

export const sizeMap: SizeMap = createSizes();

export const convertHeadingSizeToSize = (fontSize: Size | SizeHeadings): Size =>
  fontConfig.headingSizeMap[fontSize as SizeHeadings] || (fontSize as Size);

export const makeSize = ({
  size,
  override = undefined
}: SizeProperties): string => {
  console.log(sizeMap);
  const sanitizedSize = convertHeadingSizeToSize(size);

  if (!override) {
    return sizeMap.size[sanitizedSize][sizeConfig.sizeUnits];
  }
  return createCustomSize(override);
};
