import { mix } from "polished";

import {
  ColorProperties,
  ColorScales,
  ColorBlendRatios,
  ColorHex
} from "../types/composite";
import { ColorScalable, ColorFixed } from "../types/primitive/color.primitive";
import { colorConfig } from "../configs";

type ColorMapScalable = { [key in ColorScalable]: ColorScales };
type ColorMapFixed = { [key in ColorFixed]: ColorHex };

const createColor = (
  scaler: ColorBlendRatios,
  color: ColorScalable
): ColorHex =>
  mix(scaler, colorConfig.fixed.light, colorConfig.scalable[color]);

const createColorScale = (hex: ColorScalable): ColorScales => [
  colorConfig.scalable[hex],
  createColor(0.25, hex),
  createColor(0.5, hex),
  createColor(0.75, hex)
];

const scalableColorMap: ColorMapScalable = {
  primary: createColorScale("primary"),
  secondary: createColorScale("secondary"),
  accent: createColorScale("accent"),
  gray: createColorScale("gray"),
  light: createColorScale("light"),
  success: createColorScale("success"),
  warning: createColorScale("warning"),
  error: createColorScale("error")
};

const fixedColorMap: ColorMapFixed = {
  light: colorConfig.fixed.light,
  dark: colorConfig.fixed.dark
};

export const makeColor = ({
  fixed,
  scalable,
  custom
}: ColorProperties): ColorHex => {
  if (scalable?.color) {
    return scalableColorMap[scalable.color][scalable.scale || 0];
  }
  if (fixed) {
    return fixedColorMap[fixed];
  }
  if (custom) {
    console.warn(
      "You're attempting to use a custom color that falls outside of the design system. This color will not be regulated by the design system any longer and thusly isn't type-safe. You'll be required to update this value manually for any subsequent changes. Use with cation."
    );
    console.log(custom);
    return custom;
  }
  return "";
};
