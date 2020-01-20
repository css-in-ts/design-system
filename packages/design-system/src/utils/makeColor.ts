import { mix } from "polished";

import {
  ColorProperties,
  ColorScales,
  ColorBlendRatios,
  ColorHex,
  ColorScalePosition
} from "../types/composite";
import { ColorScalable, ColorFixed } from "../types/primitive/color.primitive";
import { colorConfig } from "../configs";

type ColorMapScalable = { [key in ColorScalable]: ColorScales };
type ColorMapFixed = { [key in ColorFixed]: ColorHex };

const createColor = (
  scaler: ColorBlendRatios,
  color: ColorScalable
): ColorHex =>
  mix(scaler, colorConfig.fixed.light, colorConfig.scalable[color]);

const createColorScale = (hex: ColorScalable): ColorScales => [
  colorConfig.scalable[hex],
  createColor(0.25, hex),
  createColor(0.5, hex),
  createColor(0.75, hex)
];

const scalableColorMap: ColorMapScalable = {
  primary: createColorScale("primary"),
  secondary: createColorScale("secondary"),
  accent: createColorScale("accent"),
  gray: createColorScale("gray"),
  light: createColorScale("light"),
  success: createColorScale("success"),
  warning: createColorScale("warning"),
  error: createColorScale("error")
};

const fixedColorMap: ColorMapFixed = {
  light: colorConfig.fixed.light,
  dark: colorConfig.fixed.dark
};

export const makeColor = ({
  fixed,
  scalable,
  custom
}: ColorProperties): ColorHex => {
  if (scalable?.color) {
    return scalableColorMap[scalable.color][scalable.scale || 0];
  }
  if (fixed) {
    return fixedColorMap[fixed];
  }
  if (custom) {
    console.warn(
      "You're attempting to use a custom color that falls outside of the design system. This color will not be regulated by the design system any longer and thusly isn't type-safe. You'll be required to update this value manually for any subsequent changes. Use with cation."
    );
    console.log(custom);
    return custom;
  }
  return "";
};

// can I call makeColor with an empty object?
// const foo = makeColor({})
// yessir

// how about multiple keys?
// const bar = makeColor({ fixed: "dark", custom: "light" })
// hmm...

// and this?
// const baz = makeColor({ fixed: "dark", custom: "light", scalable: { color: 'primary' } })
// so what does that mean?


// hmm...
type ColorConfig =
  | { type: 'fixed', color: ColorFixed }
  | { type: 'scalable', config: { color: ColorScalable; scale?: ColorScalePosition } }
  | { type: 'custom', string: ColorHex  }

// @ts-ignore
const makeColorV2 = (arg: ColorConfig): ColorHex => {
  switch (arg.type) {
    case 'fixed':
      return fixedColorMap[arg.color]
    case 'scalable':
      return scalableColorMap[arg.config.color][arg.config.scale ?? 0]
    default:
      return arg.string
  }
};

// do all 3 versions compile?
// const yea = makeColorV2({ type: 'fixed', color: 'dark' })
// const yep = makeColorV2({ type: 'scalable', config: { color: 'primary' } })
// const uhHuh = makeColorV2({ type: 'custom', string: 'foo '})

// empty?
// const buz = makeColorV2({})
// nope

// how about multiple keys?
// const quz = makeColorV2({ type: 'scalable', color: 'dark', config: { color: 'primary' } })
// nay sir
