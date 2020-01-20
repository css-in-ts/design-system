import React, { FC } from 'react';
import { IconName } from '@fortawesome/free-brands-svg-icons';
import {
  HTMLButton,
  ColorProperties,
  FontProperties,
} from '@typesafe-design/design-system/types/composite';

import { Icon, Copy, IconProps } from '../typography';

import styled from 'styled-components';
import { makeReset, makeOutset } from '@typesafe-design/design-system/utils';

type ButtonActionProps = HTMLButton & {
  label: string;
  size?: FontProperties['fontSize'];
  icon?: IconName | undefined;
  color?: ColorProperties;
  iconWeight?: IconProps['iconWeight'];
};

const StyledButtonAction = styled.button`
  ${makeReset('button')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > div {
    ${makeOutset({ right: 4 })}
  }
`;

export const ButtonAction: FC<ButtonActionProps> = ({
  label,
  size = 'sm',
  icon = undefined,
  iconWeight = 'fab',
  color = { scalable: { color: 'accent' } },
  ...restButtonProps
}) => (
  <StyledButtonAction {...restButtonProps}>
    {icon && (
      <Icon
        icon={icon}
        iconWeight={iconWeight}
        iconSize={size}
        iconColor={color}
      />
    )}
    <Copy type="label" fontSize={size} fontColor={color}>
      {label}
    </Copy>
  </StyledButtonAction>
);
