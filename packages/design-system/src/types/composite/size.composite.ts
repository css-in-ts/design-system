import { ratioNames } from "polished/lib/helpers/modularScale";
import { Size } from "../primitive";

export type SizeUnits = "em" | "rem" | "px";
export type SizeModularScaleRatio = keyof typeof ratioNames | number;
export type SizeScales = { [key in Size]: number };
export type SizeHeadings = "h1" | "h2" | "h3" | "h4" | "h5";

export type SpaceScale = "linear" | "exponential";
export type SpaceLinearValues = number[];

export interface CSSPositionOffsets {
  top: Size | number;
  right: Size | number;
  bottom: Size | number;
  left: Size | number;
}

export interface SizeProperties {
  size: Size | SizeHeadings;
  override?: string;
}

export interface SpaceProperties {
  value: Size | number;
  override?: number;
}
