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
    primary: "#178d7d",
    secondary: "#1d6c9eff",
    accent: "#ee7d0f",
    gray: "#4a4a4a",
    light: "#eaecec",
    success: "#29a784",
    warning: "#f8e71c",
    error: "#d0021b"
  }
};
