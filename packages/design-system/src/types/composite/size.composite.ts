import { ratioNames } from "polished/lib/helpers/modularScale";
import { Size } from "../primitive";

// Size
export type SizeUnits = "em" | "rem" | "px";
export type SizeModularScaleRatio = keyof typeof ratioNames | number;
export type SizeScales = { [key in Size]: number };
export type SizeHeadings = "h1" | "h2" | "h3" | "h4" | "h5";

export type SizeProperties =
  | (Size | SizeHeadings)
  | {
      custom?: number;
    };

// Space
export type SpaceScale = "linear" | "exponential";
export type SpaceLinearValues = number[];

export type SpaceProperties =
  | (Size | number)
  | {
      custom?: number;
    }
  | "auto";

type CSSBoxLong = "top" | "right" | "bottom" | "left";
type CSSBoxShort = "vertical" | "horizontal";
type CSSBox = CSSBoxShort | CSSBoxLong;

export type InsetOutsetProperties = {
  [key in CSSBox]: SpaceProperties;
};
