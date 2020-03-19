import { createGlobalStyle } from "styled-components";

import { makeFontFace } from "@css-in-ts/design-system/utils";

export const FontFamily = createGlobalStyle`
  ${makeFontFace()}
`;
