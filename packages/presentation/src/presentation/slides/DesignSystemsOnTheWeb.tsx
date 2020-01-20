import React, { FC } from "react";
import {Heading, Image, Layout} from 'spectacle';
// @ts-ignore
import html5 from '../../assets/html5.svg'
// @ts-ignore
import css3 from '../../assets/css3.svg'
// @ts-ignore
import js from '../../assets/js.svg'
// @ts-ignore
import sass from '../../assets/sass.svg'
// @ts-ignore
import less from '../../assets/less.svg'
// @ts-ignore
import cssModules from '../../assets/css-modules.png'

export const DesignSystemsOnTheWeb: FC = () =>
  <>
    <Heading size={6} textColor="secondary">
      Design Systems...on the Web
    </Heading>
    <Layout>
      <Image src={html5} height={100} />
      <Image src={css3} height={100} />
      <Image src={js} height={100} />
    </Layout>
    <Layout>
      <Image src={less} height={100} />
      <Image src={sass} height={100} />
      <Image src={cssModules} height={100} />
    </Layout>
  </>