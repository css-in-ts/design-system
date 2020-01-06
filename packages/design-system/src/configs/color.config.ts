import { ColorValueFixed, ColorValueScalable } from "../types/composite";

export interface ColorConfig {
  fixed: ColorValueFixed;
  scalable: ColorValueScalable;
}

export const colorConfig: ColorConfig = {
  fixed: {
    light: "#fff",
    dark: "#000"
  },
  scalable: {
    primary: "#bf9f5a",
    secondary: "#4e8588",
    accent: "#9ac371",
    gray: "#4a4a4a",
    light: "#eaecec",
    success: "#29a784",
    warning: "#f8e71c",
    error: "#d0021b"
  }
};
