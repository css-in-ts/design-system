import {
  SizeModularScaleRatio,
  SizeUnits,
  SizeScales,
  SpaceScale
} from "../types/composite";

import { ResponsiveDeviceTypes } from "./responsive.config";

export interface SizeConfig {
  documentFontSize: string;
  modularScaleRatio: SizeModularScaleRatio;
  baseFontSize: string;
  sizeUnits: SizeUnits;
  lineHeight: number;
  baselineGrid: number;
  responsiveFontScaler?: number;
  responsiveFontSizes?: { [key in ResponsiveDeviceTypes]: string } | undefined;
  fontSizeScaleMap: SizeScales;
  // space
  spaceScale: SpaceScale;
}

export const sizeConfig: SizeConfig = {
  documentFontSize: "16px",
  modularScaleRatio: "perfectFourth",
  baseFontSize: "14px",
  sizeUnits: "rem",
  lineHeight: 1.5,
  baselineGrid: 4,
  spaceScale: "linear",
  fontSizeScaleMap: {
    xxs: -2,
    xs: -1,
    sm: 0,
    md: 1,
    lg: 2,
    xl: 3,
    xxl: 4
  }
};
