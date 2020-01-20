import React, {FC} from "react";
import {Appear, Heading, Image, Layout, Fill} from 'spectacle';
import html5 from '../../assets/html5.svg'
import css3 from '../../assets/css3.svg'
import js from '../../assets/js.svg'
import sass from '../../assets/sass.svg'
import less from '../../assets/less.svg'
import cssModules from '../../assets/css-modules.png'
import styled from "styled-components";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 10px;
`

export const DesignSystemsOnTheWeb: FC = () =>
  <>
    <Heading size={6} textColor="secondary">
      Design Systems...on the Web
    </Heading>
    <Appear>
      <ImageGrid>
        <Image src={html5} height={100} />
        <Image src={css3} height={100} />
        <Image src={js} height={100} />
        <Image src={less} height={100} />
        <Image src={sass} height={100} />
        <Image src={cssModules} height={100} />
      </ImageGrid>
    </Appear>
  </>