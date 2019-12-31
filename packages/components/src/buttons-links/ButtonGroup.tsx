import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";
import { Layout } from "@typesafe-design/design-system/types/primitive";

import { StyledButton } from "./Button";

interface ButtonGroupProps {
  layout?: Layout;
}

const buttonGroupStyleMap: { [key in Layout]: SimpleInterpolation } = {
  inline: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > ${StyledButton} + ${StyledButton} {
      margin-left: 1rem;
    }
  `,
  stacked: css`
    ${StyledButton} {
      display: block;
    }
    & > ${StyledButton} + ${StyledButton} {
      margin-top: 1rem;
    }
  `,
  standalone: css``
};

const StyledButtonGroup = styled.div<Required<ButtonGroupProps>>`
  ${({ layout }) => buttonGroupStyleMap[layout]}
`;

export const ButtonGroup: FC<ButtonGroupProps> = ({
  layout = "stacked",
  children
}) => <StyledButtonGroup layout={layout}>{children}</StyledButtonGroup>;
