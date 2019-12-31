import { Size } from "../primitive";
import { SizeHeadings } from "./size.composite";
import { ColorProperties } from "./color.composite";

export type FontSize = Size & SizeHeadings;
export type FontFamilyType = "system" | "user-defined" | "google";
export type FontFamily = "system" | "Montserrat" | "Raleway";
export type FontStyle = "normal" | "italic";
export type FontWeightValue =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
export type FontWeightName =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";
export type FontOS = "OSX" | "windows" | "android" | "ubuntu";

export interface FontProperties {
  fontSize: Size | SizeHeadings;
  lineHeight?: Size;
  fontFamily?: FontFamily;
  fontWeight?: FontWeightName;
  fontStyle?: FontStyle;
  fontColor?: ColorProperties | undefined;
  custom?: {
    fontSize: string;
    lineHeight?: string;
    fontFamily?: FontFamily;
    fontWeight?: FontWeightName;
    fontStyle?: FontStyle;
    fontColor: ColorProperties | undefined;
  };
}
