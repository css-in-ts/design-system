import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import {
  HTMLButton,
  ColorProperties,
} from '@typesafe-design/design-system/types/composite';
import { Color } from '@typesafe-design/design-system/types/primitive';
import { makeColor, makeReset } from '@typesafe-design/design-system/utils';

import { Icon, Copy } from '../typography';
import { sharedFontSize } from '../shared';

type ButtonStyleTypes = Extract<
  Color,
  'primary' | 'secondary' | 'warning' | 'error'
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
    bgColor: makeColor({ fixed: 'light' }),
    bgColorHover: makeColor({ scalable: { color: 'secondary', scale: 3 } }),
    bgColorActive: makeColor({ scalable: { color: 'secondary', scale: 2 } }),
    borderColor: makeColor({ scalable: { color: 'gray' } }),
    borderColorHover: makeColor({ scalable: { color: 'gray' } }),
    borderColorActive: makeColor({ scalable: { color: 'gray' } }),
  },
  secondary: {
    bgColor: makeColor({ scalable: { color: 'secondary' } }),
    bgColorHover: darken(0.05, makeColor({ scalable: { color: 'secondary' } })),
    bgColorActive: darken(0.1, makeColor({ scalable: { color: 'secondary' } })),
    borderColor: makeColor({ scalable: { color: 'secondary' } }),
    borderColorHover: makeColor({ scalable: { color: 'secondary' } }),
    borderColorActive: makeColor({ scalable: { color: 'secondary' } }),
  },
  warning: {
    bgColor: makeColor({ scalable: { color: 'warning' } }),
    bgColorHover: darken(0.05, makeColor({ scalable: { color: 'warning' } })),
    bgColorActive: darken(0.1, makeColor({ scalable: { color: 'warning' } })),
    borderColor: makeColor({ scalable: { color: 'warning' } }),
    borderColorHover: makeColor({ scalable: { color: 'warning' } }),
    borderColorActive: makeColor({ scalable: { color: 'warning' } }),
  },
  error: {
    bgColor: makeColor({ scalable: { color: 'error' } }),
    bgColorHover: darken(0.05, makeColor({ scalable: { color: 'error' } })),
    bgColorActive: darken(0.1, makeColor({ scalable: { color: 'error' } })),
    borderColor: makeColor({ scalable: { color: 'error' } }),
    borderColorHover: makeColor({ scalable: { color: 'error' } }),
    borderColorActive: makeColor({ scalable: { color: 'error' } }),
  },
};

export const StyledButton = styled.button<
  Required<Pick<ButtonProps, 'styleType' | 'disabled'>>
>`
  ${makeReset('button')}
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
    background: ${makeColor({ scalable: { color: 'gray', scale: 3 } })};
    border-color: ${makeColor({ scalable: { color: 'gray', scale: 2 } })};
  }
`;

export const Button: FC<ButtonProps> = ({
  label,
  styleType = 'primary',
  loading = false,
  ...restProps
}) => (
  <StyledButton
    styleType={styleType}
    disabled={restProps.disabled || loading}
    {...restProps}
  >
    {loading ? (
      <Icon iconSize="sm" icon="spinner" spin />
    ) : (
      <Copy
        type="label"
        fontSize={sharedFontSize}
        fontColor={((): ColorProperties => {
          if (styleType !== 'primary' && styleType !== 'warning') {
            return { fixed: 'light' };
          }
          if (restProps.disabled || loading) {
            return { scalable: { color: 'gray', scale: 2 } };
          }
          return { scalable: { color: 'gray' } };
        })()}
      >
        {label}
      </Copy>
    )}
  </StyledButton>
);
