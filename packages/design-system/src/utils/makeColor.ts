import { mix } from "polished";

import {
  ColorProperties,
  ColorTypes,
  ColorScales,
  ColorBlendRatios,
  ColorHex
} from "../types/composite";
import { ColorScalable, ColorStatic } from "../types/primitive/color.primitive";
import { colorConfig } from "../configs";

type ColorMapScalable = { [key in ColorScalable]: ColorScales };
type ColorMapStatic = { [key in ColorStatic]: ColorHex };
type ColorMapCustom = any;

type ColorMaps = ColorMapScalable | ColorMapStatic | ColorMapCustom;
type Colors = { [key in ColorTypes]: ColorMaps };

const createColor = (
  scaler: ColorBlendRatios,
  color: ColorScalable
): ColorHex =>
  mix(scaler, colorConfig.static.light, colorConfig.scalable[color]);

const createColorScale = (hex: ColorScalable): ColorScales => [
  createColor(0.8, hex),
  createColor(0.6, hex),
  createColor(0.4, hex),
  createColor(0.2, hex),
  colorConfig.scalable[hex]
];

const scalableColorMap: ColorMapScalable = {
  primary: createColorScale("primary"),
  secondary: createColorScale("secondary"),
  accent: createColorScale("accent"),
  grayscale: createColorScale("grayscale"),
  lightscale: createColorScale("lightscale"),
  success: createColorScale("success"),
  warning: createColorScale("warning"),
  error: createColorScale("error")
};

const staticColorMap: ColorMapStatic = {
  light: colorConfig.static.light,
  dark: colorConfig.static.dark
};

const colors: Colors = {
  scalable: scalableColorMap,
  static: staticColorMap,
  custom: (color: any) => {
    console.warn(
      "You're attempting to use a custom color that falls outside of the design system. This color will not be regulated by the design system any longer and thusly isn't type-safe. You'll be required to update this value manually for any subsequent changes. Use with cation."
    );
    console.log(color);
    return color;
  }
};

export const makeColor = ({
  type,
  color,
  scale = 4
}: ColorProperties): ColorHex => {
  if (type === "scalable") {
    return colors[type][color][scale];
  }
  if (type === "static") {
    return colors[type][color];
  }
  return colors[type](color);
};
