import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import {
  SizeHeadings,
  HTMLHeading,
  ColorProperties,
} from '@css-in-ts/design-system/types/composite';
import { makeReset, makeFont } from '@css-in-ts/design-system/utils';

export type HeadingProps = HTMLHeading & {
  fontSize?: SizeHeadings;
  fontColor?: ColorProperties;
  copy?: string | undefined;
};

const BaseHeading = css`
  ${makeReset('heading')};
`;

type HeadingStyleProps = Required<Pick<HeadingProps, 'fontColor'>>;

const StyledH1 = styled.h1<HeadingStyleProps>`
  ${BaseHeading};
  ${({ fontColor }) =>
    makeFont({ fontSize: 'h1', fontFamily: 'Montserrat', fontColor })}
`;

const StyledH2 = styled.h2<HeadingProps>`
  ${BaseHeading};
  ${({ fontColor }) =>
    makeFont({ fontSize: 'h2', fontFamily: 'Montserrat', fontColor })}
`;

const StyledH3 = styled.h3<HeadingProps>`
  ${BaseHeading};
  ${({ fontColor }) =>
    makeFont({ fontSize: 'h3', fontFamily: 'Raleway', fontColor })}
`;

const StyledH4 = styled.h4<HeadingProps>`
  ${BaseHeading};
  ${({ fontColor }) =>
    makeFont({ fontSize: 'h4', fontFamily: 'Raleway', fontColor })}
`;

const StyledH5 = styled.h5<HeadingProps>`
  ${BaseHeading};
  ${({ fontColor }) =>
    makeFont({ fontSize: 'h5', fontFamily: 'Raleway', fontColor })}
`;

export const Heading: FC<HeadingProps> = ({
  fontSize = 'h1',
  fontColor = { scalable: { color: 'gray' } },
  copy = undefined,
  children = undefined,
}) => {
  switch (fontSize) {
    case 'h1':
      return <StyledH1 fontColor={fontColor}>{copy || children}</StyledH1>;
    case 'h2':
      return <StyledH2 fontColor={fontColor}>{copy || children}</StyledH2>;
    case 'h3':
      return <StyledH3 fontColor={fontColor}>{copy || children}</StyledH3>;
    case 'h4':
      return <StyledH4 fontColor={fontColor}>{copy || children}</StyledH4>;
    case 'h5':
      return <StyledH5 fontColor={fontColor}>{copy || children}</StyledH5>;
    default:
      return <StyledH1 fontColor={fontColor}>{copy || children}</StyledH1>;
  }
};
