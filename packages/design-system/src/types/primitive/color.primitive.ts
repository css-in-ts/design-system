export type ColorStateful = "success" | "warning" | "error";
export type ColorApplication =
  | "primary"
  | "secondary"
  | "accent"
  | "grayscale"
  | "lightscale";
export type ColorStatic = "dark" | "light";

export type ColorScalable = ColorApplication | ColorStateful;
type Color = ColorScalable | ColorStatic;

export default Color;
