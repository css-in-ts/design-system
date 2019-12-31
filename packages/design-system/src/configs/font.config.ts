import { FontFaceConfiguration } from "polished/lib/types/fontFaceConfiguration";

import { Size } from "../types/primitive";
import {
  FontFamily,
  FontStyle,
  FontWeightValue,
  FontFamilyType,
  FontWeightName,
  SizeHeadings,
  ColorProperties
} from "../types/composite";

export interface FontFamilyDefinitionOptions {
  family: FontFamily;
  variants: {
    [type in Exclude<FontStyle, "bold">]: FontWeightValue[];
  };
}

export interface FontFamilyDefinition {
  source: FontFamilyType;
  options: FontFamilyDefinitionOptions | FontFaceConfiguration;
}

export interface FontConfig {
  defaults: {
    fontFamily: FontFamily;
    fontStyle: FontStyle;
    fontWeight: FontWeightName;
    fontColor: ColorProperties | undefined;
  };
  headingSizeMap: {
    [key in SizeHeadings]: Size;
  };
  fontWeightMap: {
    [key in FontWeightName]: FontWeightValue;
  };
  fontFamilyDefinitions: FontFamilyDefinition[];
}
export const fontConfig: FontConfig = {
  defaults: {
    fontFamily: "system",
    fontStyle: "normal",
    fontWeight: "regular",
    fontColor: undefined
  },
  headingSizeMap: {
    h1: "xxl",
    h2: "xl",
    h3: "lg",
    h4: "md",
    h5: "sm"
  },
  fontWeightMap: {
    thin: "100",
    "extra-light": "200",
    light: "300",
    regular: "400",
    medium: "500",
    "semi-bold": "600",
    bold: "700",
    "extra-bold": "800",
    black: "900"
  },
  fontFamilyDefinitions: [
    {
      source: "google",
      options: {
        family: "Montserrat",
        variants: {
          italic: ["400", "500"],
          normal: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900"
          ]
        }
      }
    },
    {
      source: "google",
      options: {
        family: "Raleway",
        variants: {
          italic: ["300", "400"],
          normal: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900"
          ]
        }
      }
    }
  ]
};
