export type ColorStateful = "success" | "warning" | "error";
export type ColorApplication =
  | "primary"
  | "secondary"
  | "accent"
  | "gray"
  | "light";
export type ColorFixed = "dark" | "light";
export type ColorScalable = ColorApplication | ColorStateful;
type Color = ColorScalable | ColorFixed;

export default Color;
