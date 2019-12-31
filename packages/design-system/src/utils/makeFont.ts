import {
  FontFamily,
  FontStyle,
  ColorProperties,
  FontProperties
} from "../types/composite";
import { fontConfig, sizeConfig } from "../configs";

import {
  createCustomSize,
  sizeMap,
  convertHeadingSizeToSize
} from "./makeSize";
import { makeColor } from "./makeColor";

const createFontColor = (
  fontColor: ColorProperties | undefined
): { color: string } | {} => (fontColor ? { color: makeColor(fontColor) } : {});

export const makeFont = ({
  fontSize,
  lineHeight,
  fontFamily = fontConfig.defaults.fontFamily,
  fontWeight = fontConfig.defaults.fontWeight,
  fontStyle = fontConfig.defaults.fontStyle,
  fontColor = fontConfig.defaults.fontColor,
  custom = undefined
}: FontProperties): {
  fontSize: string;
  lineHeight: string;
  fontFamily: FontFamily;
  fontWeight: number;
  fontStyle: FontStyle;
  color?: string;
} => {
  const size = convertHeadingSizeToSize(fontSize);

  const options = {
    fontFamily,
    fontWeight: Number(fontConfig.fontWeightMap[fontWeight]),
    fontStyle,
    ...createFontColor(fontColor)
  };

  if (!custom) {
    return {
      fontSize: sizeMap.fontSize[size][sizeConfig.sizeUnits],
      lineHeight: lineHeight
        ? sizeMap.lineHeight[lineHeight][sizeConfig.sizeUnits]
        : sizeMap.lineHeight[size][sizeConfig.sizeUnits],
      ...options
    };
  }
  return {
    fontSize: createCustomSize(custom.fontSize),
    lineHeight: createCustomSize(custom.lineHeight || sizeConfig.lineHeight),
    ...options
  };
};
