import { createGlobalStyle } from "styled-components";

import { makeFontFace } from "@typesafe-design/design-system/utils";

export const FontFamily = createGlobalStyle`
  ${makeFontFace()}
`;
