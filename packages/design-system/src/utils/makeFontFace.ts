import { fontFace } from "polished";
import { Styles } from "polished/lib/types/style";

import {
  FontOS,
  FontStyle,
  FontWeightName,
  FontFamily
} from "../types/composite";
import { fontConfig } from "../configs";

import { FontFaceConfiguration } from "polished/lib/types/fontFaceConfiguration";
import {
  FontFamilyDefinitionOptions,
  FontFamilyDefinition
} from "../configs/font.config";

// Inspiration: https://jonneal.dev/system-font-css/
type SystemFontOsMap = {
  [key in FontOS]: string[];
};
type SystemFontStyleMap = {
  [key in FontStyle]: SystemFontOsMap;
};
type SystemFontWeightKey = Extract<
  FontWeightName,
  "light" | "regular" | "medium" | "bold"
>;
type SystemFontMap = {
  [key in SystemFontWeightKey]: SystemFontStyleMap;
};

const systemFontMap: SystemFontMap = {
  light: {
    normal: {
      OSX: [
        ".SFNS-Light",
        ".SFNSText-Light",
        ".HelveticaNeueDeskInterface-Light",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Light", "Tahoma"],
      android: ["Roboto-LightItalic", "DroidSans"],
      ubuntu: ["Ubuntu Light"]
    },
    italic: {
      OSX: [
        ".SFNS-LightItalic",
        ".SFNSText-LightItalic",
        ".HelveticaNeueDeskInterface-Italic",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Light Italic", "Tahoma"],
      android: ["Roboto-Light", "DroidSans"],
      ubuntu: ["Ubuntu Light Italic"]
    }
  },
  regular: {
    normal: {
      OSX: [
        ".SFNS-Regular",
        ".SFNSText-Regular",
        ".HelveticaNeueDeskInterface-Regular",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI", "Tahoma"],
      android: ["Roboto-Regular", "DroidSans"],
      ubuntu: ["Ubuntu"]
    },
    italic: {
      OSX: [
        ".SFNS-Italic",
        ".SFNSText-Italic",
        ".HelveticaNeueDeskInterface-Italic",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Italic", "Tahoma"],
      android: ["Roboto-Italic", "DroidSans"],
      ubuntu: ["Ubuntu Italic"]
    }
  },
  medium: {
    normal: {
      OSX: [
        ".SFNS-Medium",
        ".SFNSText-Medium",
        ".HelveticaNeueDeskInterface-MediumP4",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Semibold", "Tahoma Bold"],
      android: ["Roboto-Medium", "DroidSans"],
      ubuntu: ["Ubuntu Medium"]
    },
    italic: {
      OSX: [
        ".SFNS-MediumItalic",
        ".SFNSText-MediumItalic",
        ".HelveticaNeueDeskInterface-MediumItalicP4",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Semibold Italic", "Tahoma Bold"],
      android: ["Roboto-MediumItalic", "DroidSans"],
      ubuntu: ["Ubuntu Medium Italic"]
    }
  },
  bold: {
    normal: {
      OSX: [
        ".SFNS-Bold",
        ".SFNSText-Bold",
        ".HelveticaNeueDeskInterface-Bold",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Bold", "Tahoma Bold"],
      android: ["Roboto-Bold", "DroidSans"],
      ubuntu: ["Ubuntu Bold"]
    },
    italic: {
      OSX: [
        ".SFNS-BoldItalic",
        ".SFNSText-BoldItalic",
        ".HelveticaNeueDeskInterface-BoldItalic",
        ".LucidaGrandeUI"
      ],
      windows: ["Segoe UI Bold Italic", "Tahoma Bold"],
      android: ["Roboto-BoldItalic", "DroidSans"],
      ubuntu: ["Ubuntu Bold Italic"]
    }
  }
};

const createDefaultFontStyle = ({
  fontStyle,
  fontWeight,
  fontOsObj,
  fontFamily = "system"
}: {
  fontStyle: FontStyle;
  fontWeight: FontWeightName;
  fontOsObj: SystemFontOsMap;
  fontFamily?: FontFamily;
}): Styles =>
  fontFace({
    fontFamily,
    fontStyle,
    fontWeight: fontConfig.fontWeightMap[fontWeight],
    localFonts: Object.values(fontOsObj).reduce(
      (accum, osFontArr) => [...accum, ...osFontArr],
      []
    )
  });

const createSystemFontFace: CreateSystemFontFace = () =>
  Object.entries<SystemFontStyleMap>(systemFontMap).reduce<Styles[]>(
    (accumWeight, [fontWeightKey, SystemFontStyleMap]) => [
      ...accumWeight,
      ...Object.entries(SystemFontStyleMap).reduce<Styles[]>(
        (accumStyle, [fontStyleKey, fontOsObj]) => [
          ...accumStyle,
          createDefaultFontStyle({
            fontWeight: fontWeightKey as SystemFontWeightKey,
            fontStyle: fontStyleKey as FontStyle,
            fontOsObj
          })
        ],
        []
      )
    ],
    []
  );

type CreateSystemFontFace = () => Styles[];
type CreateGoogleFontFace = (def: FontFamilyDefinitionOptions) => string;
type CreateCustomFontFace = (def: FontFaceConfiguration) => Styles;

type CreateGoogleFontVariantString = (
  variants: FontFamilyDefinitionOptions["variants"]
) => string;

const createGoogleFontVariantString: CreateGoogleFontVariantString = ({
  italic = [],
  normal = []
}) => [...italic.map(weightValue => `${weightValue}i`), normal].join(",");

const createGoogleFontFace: CreateGoogleFontFace = fontFamilyDef =>
  `@import url("https://fonts.googleapis.com/css?family=${
    fontFamilyDef.family
  }:${createGoogleFontVariantString(fontFamilyDef.variants)}");`;

const createCustomFontFace: CreateCustomFontFace = fontFaceConfig =>
  fontFace(fontFaceConfig);

// ALWAYS PROVIDE A SYSTEM FONT FACE DEFINITION
type MakeFontFace = (defs?: FontFamilyDefinition[]) => (string | Styles)[];
export const makeFontFace: MakeFontFace = (
  defs = fontConfig.fontFamilyDefinitions
): (string | Styles)[] => [
  ...createSystemFontFace(),
  ...Object.values(defs).reduce<(Styles | string)[]>((accum, def) => {
    if (def.source === "google") {
      return [
        ...accum,
        createGoogleFontFace(def.options as FontFamilyDefinitionOptions)
      ];
    }
    return [
      ...accum,
      createCustomFontFace(def.options as FontFaceConfiguration)
    ];
  }, [])
];
