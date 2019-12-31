import { ColorValueStatic, ColorValueScalable } from "../types/composite";

export interface ColorConfig {
  static: ColorValueStatic;
  scalable: ColorValueScalable;
}

export const colorConfig: ColorConfig = {
  static: {
    light: "#fff",
    dark: "#000"
  },
  scalable: {
    primary: "#bf9f5a",
    secondary: "#4e8588",
    accent: "#9ac371",
    grayscale: "#4a4a4a",
    lightscale: "#eaecec",
    success: "#29a784",
    warning: "#f8e71c",
    error: "#d0021b"
  }
};
