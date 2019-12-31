import React, { FC } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconName } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  ColorProperties,
  SizeProperties
} from "@typesafe-design/design-system/types/composite";
import {
  makeColor,
  makeFont
} from "@typesafe-design/design-system/utils";

library.add(fal, fas, fab);

export type IconProps = {
  icon: IconName;
  iconWeight?: "fab" | "fal" | "fas" | undefined;
  iconSize?: SizeProperties;
  iconColor?: ColorProperties;
  spin?: boolean;
};

const StyledIcon = styled.div<
  Required<Omit<IconProps, "icon" | "iconWeight" | "spin">>
>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ iconSize }) => css`
    height: ${makeFont({ fontSize: iconSize.size }).lineHeight};
    width: ${makeFont({ fontSize: iconSize.size }).lineHeight};
    font-size: ${makeFont({ fontSize: iconSize.size }).fontSize};
  `}

  & > svg {
    width: 100%;
    height: auto;

    path {
      ${({ iconColor }) => css`
        fill: ${makeColor(iconColor)};
      `}
    }
  }
`;

export const Icon: FC<IconProps> = ({
  icon,
  iconWeight = "fal",
  iconSize = { size: "sm" },
  iconColor = { type: "scalable", color: "grayscale", scale: 2 },
  spin = false
}) => (
  <StyledIcon iconSize={iconSize} iconColor={iconColor}>
    <FontAwesomeIcon icon={[iconWeight, icon]} spin={spin} />
  </StyledIcon>
);