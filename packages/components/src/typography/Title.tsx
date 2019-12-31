import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";
import {
  makeColor,
  makeReset,
  makeFont
} from "@typesafe-design/design-system/utils";

type TitleProps = {
  size: "lg" | "md" | "sm";
  copy?: string;
};

const styledTitleStyleMap: {
  [key in TitleProps["size"]]: SimpleInterpolation;
} = {
  lg: css`
    margin: 2rem 0;
    padding: 0 2rem 1.5rem 2rem;
    &::after {
      background-color: ${makeColor({
        type: "scalable",
        color: "primary",
        scale: 4
      })};
    }
  `,
  md: css`
    margin: 1.5rem 0;
    padding: 0 1rem 1.5rem 1rem;
    &::after {
      width: 14%;
      margin-left: -7%;
      background-color: ${makeColor({
        type: "scalable",
        color: "primary",
        scale: 4
      })};
    }
  `,
  sm: css`
    margin: 1rem 0;
    padding: 0 0.5rem 1rem 0.5rem;
    &::after {
      width: 10%;
      margin-left: -5%;
      background-color: ${makeColor({
        type: "scalable",
        color: "secondary",
        scale: 4
      })};
    }
  `
};

const BaseTitle = css`
  ${makeReset("heading")};
  text-transform: uppercase;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 100%;
    width: 20%;
    left: 50%;
    margin-left: -10%;
    height: 1px;
  }
`;

const StyledTitleLg = styled.h3`
  ${BaseTitle};
  ${makeFont({
    fontSize: "h3",
    fontFamily: "Montserrat",
    fontWeight: "medium",
    fontColor: {
      type: "scalable",
      color: "primary",
      scale: 4
    }
  })};
  ${styledTitleStyleMap.lg}
`;
const StyledTitleMd = styled.h4`
  ${BaseTitle};
  ${styledTitleStyleMap.md}
  ${makeFont({
    fontSize: "h4",
    fontFamily: "Montserrat",
    fontWeight: "medium",
    fontColor: {
      type: "scalable",
      color: "primary",
      scale: 4
    }
  })};
`;
const StyledTitleSm = styled.h5`
  ${BaseTitle};
  ${styledTitleStyleMap.sm}
  ${makeFont({
    fontSize: "h5",
    fontFamily: "Montserrat",
    fontColor: {
      type: "scalable",
      color: "secondary",
      scale: 4
    }
  })};
`;

export const Title: FC<TitleProps> = ({ size, copy, children }) => {
  switch (size) {
    case "sm":
      return <StyledTitleSm>{copy || children}</StyledTitleSm>;
    case "md":
      return <StyledTitleMd>{copy || children}</StyledTitleMd>;
    case "lg":
    default:
      return <StyledTitleLg>{copy || children}</StyledTitleLg>;
  }
};
