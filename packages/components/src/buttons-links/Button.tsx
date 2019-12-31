import React, { FC } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";

import {
  HTMLButton,
  ColorProperties
} from "@typesafe-design/design-system/types/composite";
import { Color } from "@typesafe-design/design-system/types/primitive";
import {
  makeColor,
  makeReset
} from "@typesafe-design/design-system/utils";

import { Icon, Copy } from "../typography";

type ButtonStyleTypes = Extract<
  Color,
  "primary" | "secondary" | "warning" | "error"
>;

type ButtonProps = HTMLButton & {
  label: string;
  styleType?: ButtonStyleTypes;
  loading?: boolean;
};

const buttonStyleMap: {
  [key in ButtonStyleTypes]: {
    bgColor: string;
    bgColorHover: string;
    bgColorActive: string;
    borderColor: string;
    borderColorHover: string;
    borderColorActive: string;
  };
} = {
  primary: {
    bgColor: makeColor({ type: "static", color: "light" }),
    bgColorHover: makeColor({ type: "scalable", color: "secondary", scale: 0 }),
    bgColorActive: makeColor({
      type: "scalable",
      color: "secondary",
      scale: 1
    }),
    borderColor: makeColor({ type: "scalable", color: "grayscale" }),
    borderColorHover: makeColor({ type: "scalable", color: "grayscale" }),
    borderColorActive: makeColor({ type: "scalable", color: "grayscale" })
  },
  secondary: {
    bgColor: makeColor({ type: "scalable", color: "secondary" }),
    bgColorHover: makeColor({ type: "scalable", color: "secondary" }),
    bgColorActive: darken(
      0.1,
      makeColor({ type: "scalable", color: "secondary" })
    ),
    borderColor: makeColor({ type: "scalable", color: "secondary" }),
    borderColorHover: makeColor({ type: "scalable", color: "secondary" }),
    borderColorActive: makeColor({ type: "scalable", color: "secondary" })
  },
  warning: {
    bgColor: makeColor({ type: "scalable", color: "warning", scale: 3 }),
    bgColorHover: makeColor({ type: "scalable", color: "warning" }),
    bgColorActive: darken(
      0.1,
      makeColor({ type: "scalable", color: "warning" })
    ),
    borderColor: makeColor({ type: "scalable", color: "warning" }),
    borderColorHover: makeColor({ type: "scalable", color: "warning" }),
    borderColorActive: makeColor({ type: "scalable", color: "warning" })
  },
  error: {
    bgColor: makeColor({ type: "scalable", color: "error", scale: 3 }),
    bgColorHover: makeColor({ type: "scalable", color: "error" }),
    bgColorActive: darken(0.1, makeColor({ type: "scalable", color: "error" })),
    borderColor: makeColor({ type: "scalable", color: "error" }),
    borderColorHover: makeColor({ type: "scalable", color: "error" }),
    borderColorActive: makeColor({ type: "scalable", color: "error" })
  }
};

export const StyledButton = styled.button<
  Required<Pick<ButtonProps, "styleType" | "disabled">>
>`
  ${makeReset("button")}
  padding: 0.8rem 2rem;
  border-radius: 0.2rem;
  transition: all ease-in-out 0.15s;
  border-width: 1px;
  border-style: solid;

  &:not(:disabled) {
    ${({ styleType }) => css`
      background-color: ${buttonStyleMap[styleType].bgColor};
      border-color: ${buttonStyleMap[styleType].borderColor};
    `}

    &:hover {
      ${({ styleType }) => css`
        background-color: ${buttonStyleMap[styleType].bgColorHover};
        border-color: ${buttonStyleMap[styleType].borderColorHover};
      `}
    }

    &:active {
      ${({ styleType }) => css`
        background-color: ${buttonStyleMap[styleType].bgColorActive};
        border-color: ${buttonStyleMap[styleType].borderColorActive};
      `}
    }
  }

  &:disabled {
    cursor: initial;
    pointer-events: none;
    background: ${makeColor({
      type: "scalable",
      color: "grayscale",
      scale: 0
    })};
    border-color: ${makeColor({
      type: "scalable",
      color: "grayscale",
      scale: 2
    })};
  }
`;

export const Button: FC<ButtonProps> = ({
  label,
  styleType = "primary",
  loading = false,
  ...restProps
}) => (
  <StyledButton
    styleType={styleType}
    disabled={restProps.disabled || loading}
    {...restProps}
  >
    {loading ? (
      <Icon iconSize={{ size: "sm" }} icon="spinner" spin />
    ) : (
      <Copy
        type="label"
        fontSize={{ size: "sm" }}
        fontColor={((): ColorProperties => {
          if (styleType !== "primary" && styleType !== "warning") {
            return {
              type: "static",
              color: "light"
            };
          }
          if (restProps.disabled || loading) {
            return {
              type: "scalable",
              color: "grayscale",
              scale: 2
            };
          }
          return {
            type: "scalable",
            color: "grayscale",
            scale: 4
          };
        })()}
      >
        {label}
      </Copy>
    )}
  </StyledButton>
);
