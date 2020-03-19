import {
  FontProperties,
  SpaceProperties,
  ColorProperties,
} from '@css-in-ts/design-system/types/composite';
import { css } from 'styled-components';
import { makeColor, makeSpace } from '@css-in-ts/design-system/utils';

export const sharedFontSize: FontProperties['fontSize'] = 'sm';
export const sharedElementSpacing: SpaceProperties = 16;

export const createImageBorder = (color: ColorProperties) => css`
  outline: 1px solid ${makeColor(color)};
  outline-offset: -${makeSpace(20)};
`;
