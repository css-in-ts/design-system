import { createGlobalStyle } from "styled-components";

import { sizeConfig } from "@typesafe-design/design-system/configs";

export const Baseline = createGlobalStyle`
  :root{
    --color: #7ec3f140;
    --baseline: ${sizeConfig.baselineGrid}px;
    --background-baseline: repeating-linear-gradient(
      to bottom,
      var(--color),
      var(--color) 1px,
      transparent 1px,
      transparent var(--baseline)
    );
  }

  html {
    font-size: 16px;
  }
  html,
  body {
    height: 100vh;
    width: 100wh;
    margin: 0;
    padding: 0;
  }
  body {
    display: block;
    background-image: var(--background-baseline);
    background-size: var(--background-width) 100%;
    background-position: 0 var(--baseline-offset);
  }
`;
