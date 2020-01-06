import {
  FontProperties,
  SpaceProperties,
  ColorProperties,
} from '@typesafe-design/design-system/types/composite';
import { css } from 'styled-components';
import { makeColor, makeSpace } from '@typesafe-design/design-system/utils';

export const sharedFontSize: FontProperties['fontSize'] = 'sm';
export const sharedElementSpacing: SpaceProperties = 16;

export const createImageBorder = (color: ColorProperties) => css`
  outline: 1px solid ${makeColor(color)};
  outline-offset: -${makeSpace(20)};
`;
