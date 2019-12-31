import React, { ReactNode } from "react";

import { FontFamily } from "./FontFamily";

type AddFont = (storyFn: any) => ReactNode;

export const addFont: AddFont = storyFn => (
  <div>
    <FontFamily />
    {storyFn()}
  </div>
);
