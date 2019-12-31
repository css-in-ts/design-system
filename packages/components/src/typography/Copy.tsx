import React, { FC } from "react";
import styled, { css } from "styled-components";
import {
  HTMLParagraph,
  ColorProperties,
  SizeProperties,
  FontProperties
} from "@typesafe-design/design-system/types/composite";
import {
  makeReset,
  makeFont
} from "@typesafe-design/design-system/utils";

export type CopyProps = HTMLParagraph & {
  type: "caption" | "text" | "label" | "paragraph";
  fontSize?: SizeProperties;
  fontColor?: ColorProperties;
  copy?: string | undefined;
};

const BaseCopy = css`
  ${makeReset("paragraph")}
`;
const copyFontMap: { [key in CopyProps["type"]]: Partial<FontProperties> } = {
  paragraph: {
    fontFamily: "Raleway"
  },
  caption: {
    fontFamily: "Raleway"
  },
  text: {
    fontFamily: "Raleway"
  },
  label: {
    fontFamily: "Raleway",
    fontWeight: "medium"
  }
};

export const StyledCopy = styled.p<
  Required<Pick<CopyProps, "fontColor" | "fontSize" | "type">>
>`
  ${BaseCopy};
  ${({ fontSize, fontColor, type }) =>
    makeFont({ ...copyFontMap[type], fontSize: fontSize.size, fontColor })}
`;

export const Copy: FC<CopyProps> = ({
  type,
  fontSize = { size: "sm" },
  fontColor = { type: "scalable", color: "grayscale" },
  copy = undefined,
  children = undefined
}) => (
  <StyledCopy type={type} fontSize={fontSize} fontColor={fontColor}>
    {copy || children}
  </StyledCopy>
);
