import React, {FC} from "react";
import {Appear, Heading, Image, Notes, ListItem, List} from 'spectacle';
import html5 from '../../assets/html5.svg'
import css3 from '../../assets/css3.svg'
import js from '../../assets/js.svg'
import sass from '../../assets/sass.svg'
import less from '../../assets/less.svg'
import cssModules from '../../assets/css-modules.png'
import tailwind from '../../assets/tailwind.svg';
import bootstrap from '../../assets/bootstrap.svg';
import angular from '../../assets/angular.svg'
import react from '../../assets/react.svg'
import vue from '../../assets/vue.svg'
import styledComponents from '../../assets/styled-components.png'
import emotion from '../../assets/emotion.png'
import jss from '../../assets/jss.png'
import styled from "styled-components";

const GridRow = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns }, 1fr);
  padding-top: 50px;
`

const DesignSystemsOnTheWeb: FC = ({ children }) =>
  <>
    <Heading size={6} textColor="secondary">
      Implementing Design Systems...on the Web
    </Heading>
    {children}
  </>

export const DesignSystemsOnTheWeb_1: FC = () =>
  <DesignSystemsOnTheWeb>
    <Appear>
      <GridRow columns={3}>
        <Image src={html5} height={100} />
        <Image src={css3} height={100} />
        <Image src={js} height={100} />
      </GridRow>
    </Appear>
    <Notes>
      <Heading size={3} textColor="primary">In the end, implementing anything on the web is about Markup, CSS, and JS</Heading>
    </Notes>
  </DesignSystemsOnTheWeb>

// @ts-ignore
export const DesignSystemsOnTheWeb_2: FC = () =>
  <DesignSystemsOnTheWeb>
    <GridRow columns={1}>
      <Image src={css3} height={100} />
    </GridRow>
    <Appear>
      <GridRow columns={3}>
        <Image src={less} height={100} />
        <Image src={sass} height={100} />
        <Image src={cssModules} height={100} />
      </GridRow>
    </Appear>
    <Appear>
      <GridRow columns={2}>
        <Image src={bootstrap} height={100} />
        <Image src={tailwind} height={100} />
      </GridRow>
    </Appear>
    <Notes>
      <Heading size={3} textColor="primary">
        <List>
          <ListItem>
            Most developers think of CSS when they think of implementing a design.
          </ListItem>
          <ListItem>
            In the end, very few actually write CSS source files.  They use a preprocessor like LESS or SASS, or use CSS Modules
          </ListItem>
          <ListItem>
            Many more use CSS frameworks like Bootstrap and Tailwind
          </ListItem>
        </List>
      </Heading>
    </Notes>
  </DesignSystemsOnTheWeb>

export const DesignSystemsOnTheWeb_3: FC = () =>
  <DesignSystemsOnTheWeb>
    <GridRow columns={2}>
      <Image src={html5} height={100} />
      <Image src={js} height={100} />
    </GridRow>
    <Appear>
      <GridRow columns={3}>
        <Image src={angular} height={100} />
        <Image src={react} height={100} />
        <Image src={vue} height={100} />
      </GridRow>
    </Appear>
    <Notes>
      <Heading size={3} textColor="primary">
        <List>
          <ListItem>
            CSS alone doesn't get you there.  You need the right markup, and you need a programming language to drive things.
          </ListItem>
          <ListItem>
            These days, web design is synonymous with one of the contestants in the "SPA war".
          </ListItem>
          <ListItem>
            But these frameworks don't provide tooling for css in and of themselves.
          </ListItem>
        </List>
      </Heading>
    </Notes>
  </DesignSystemsOnTheWeb>

export const DesignSystemsOnTheWeb_4: FC = () =>
  <DesignSystemsOnTheWeb>
    <GridRow columns={3}>
      <Image src={html5} height={100} />
      <Image src={css3} height={100} />
      <Image src={js} height={100} />
    </GridRow>
    <Appear>
      <GridRow columns={3}>
        <Image src={styledComponents} height={100} />
        <Image src={emotion} height={100} />
        <Image src={jss} height={100} />
      </GridRow>
    </Appear>
    <Appear>
      <GridRow columns={3}>
        <Image src={angular} height={100} />
        <Image src={react} height={100} />
        <Image src={vue} height={100} />
      </GridRow>
    </Appear>
    <Notes>
      <Heading size={3} textColor="primary">
        <List>
          <ListItem>
            The advent of "CSS in JS" has provided yet another alternative for maintaining CSS.
          </ListItem>
          <ListItem>
            CSS in JS provides a few added benefits:
          </ListItem>
          <List>
            <ListItem>
              Using similar tooling for both CSS and JS.
            </ListItem>
            <ListItem>
              Toggling styling directly with Javascript (as opposed to toggling class names)
            </ListItem>
            <ListItem>
              Can be used to build "components" in your favorite framework.
            </ListItem>
          </List>
        </List>
      </Heading>
    </Notes>
  </DesignSystemsOnTheWeb>