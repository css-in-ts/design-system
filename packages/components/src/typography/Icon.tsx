import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  ColorProperties,
  FontProperties,
} from '@css-in-ts/design-system/types/composite';
import { makeColor, makeFont } from '@css-in-ts/design-system/utils';

library.add(fab);

export type IconProps = {
  icon: IconName;
  iconWeight?: 'fab';
  iconSize?: FontProperties['fontSize'];
  iconColor?: ColorProperties;
  spin?: boolean;
};

const StyledIcon = styled.div<
  Required<Omit<IconProps, 'icon' | 'iconWeight' | 'spin'>>
>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ iconSize }) => css`
    height: ${makeFont({ fontSize: iconSize }).lineHeight};
    width: ${makeFont({ fontSize: iconSize }).lineHeight};
    font-size: ${makeFont({ fontSize: iconSize }).fontSize};
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
  iconWeight = 'fab',
  iconSize = 'sm',
  iconColor = { scalable: { color: 'gray' } },
  spin = false,
}) => (
  <StyledIcon iconSize={iconSize} iconColor={iconColor}>
    <FontAwesomeIcon icon={[iconWeight, icon]} spin={spin} />
  </StyledIcon>
);
