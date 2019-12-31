# Typesafe Design System

A set of utilities that empower anybody to implement a completely custom, typesafe design system at scale.

## The problem

One of the most difficult things in front-end development is maintaining the sanity of the design system at scale. There are many libraries that attempt to accomplish this such as Bootstrap, Material Design, Ant Design, etc... by offering a means or methodology to adopt, but each of them has their drawbacks related to scale. They offer means of customization but sticking to those strict conventions it is extremely difficult especially when you factor in the ever changing needs of your application.

Below are a few examples of some of the things that can happen at any point that can completely disrupt how a design system is technically implemented and executed.

- **Changing creative direction / aligned resources** - people do things differently and envision flows differently
- **Strategic Pivot** - Customer to expert application
- **Re-branding** - full rework of the aesthetic & color palette
- **Aggressive timelines** - promote the use of static values to "just get it done"

Shimming existing to create your own is valuable in the short term, but significantly increases the complexity and potential maintenance of your application as it scales.

## The solution

This library exposes a set of typesafe utilities that enables anybody to implement a pre-configured design system.

These utilities derive their values and types from a few general base configurations and allow the engineer to easily implement a completely cohesive design system at scale without ever worrying about it's underlying nuance.

This provides full customization around the internals of the library and allows you to adjust, interface and utilize it in a scalable manner.

### A quick example

Typescript React

```tsx
import { makeColor, makeSpace, makeSize } from "@typesafe-design/utils";

export const TestComponent = () => (
  <div
    style={{
      backgroundColor: makeColor({ type: "scalable", color: "primary" }),
      paddingLeft: makeSpace({ space: "xs" }),
      height: makeSize({ size: "xl" }),
      width: makeSize({ size: "xl" })
    }}
  >
    Some content
  </div>
);
```

DOM

```html
<div
  style="background-color: #44BC832; paddingLeft: 0.25rem; height: 2rem; width: 2rem;"
>
  Some content
</div>
```

## Features

- **CSS-in-JS Library Agnostic** - Seeing as these are only typed variables and configuration values, we can easily use this in any CSS-in-JS library. We like `styled-components` & `styled-jsx` & `emotion`
- **Only 2 peer-dependencies** - Typescript (naturally) and polished (for some utilities to ease the load on modular scale, rem and em transformations)
- **Refactor with ease** - The typescript compiler will let you know where your small refactor will break and what files / lines need to be updated

## FAQs

Let's see if we can't convince you...

### Why should I be using a typesafe design system?

The real question is _why not_ use a typesafe design system? Think about some of the things that we encounter as front-end developers.

- Manually converting `px` values to `em` or `rem`
- 4 or 5 seemingly different yet similar colors of red
- `ctrl + f` hex values across projects or repositories
- Wondering if the `17px` spacing value in InVision is correct or not
- ... more to come ...

The benefits of using utility based design system that utilizes type-saftey is that you can forget about those things above. Need to make a size? Use the `makeSize` utility and pick the value that appears.

### What are the main benefits of using a typesafe design system?

#### Refactoring is easy

Thanks to typescript, changing an interface or updating a value is as simple as making the change and then letting the compiler tell you where your changes are going to fail. This makes refactoring as easy as changing one value and letting typescript do the rest of the work.

#### Utility based implementation

All static values such as colors, line heights, sizes, etc... are worked out in advance between design and development, configured, and then never have to be worried about again. The utilities implement those decisions in a seamless way through always providing you with the proper values.

#### Easily implement significant change

The companies brand changed and you need to update your vertical rhythm or change primary color or increase your baseline grid? Update the base configurations and they will automatically be applied to the resulting system

#### Reduced mental load = increased time savings

The utilities reduce the mental load on the individual engineer who is transforming the design to the code. Static values can be passed to the utilities and the utilities do the proper conversions based upon the configuration values. e.g. manually converting pixel values to rems or ems.

#### Reduce / virtually eliminate visual inconsistency

#### Reduce / virtually eliminate visual design system defects

Never have to worry about if a shade of color is correct. Opening the inspector to check the hex value is now a thing of the past.

### Why wouldn't I just use Material or Bootstrap?

## Documentation

- [Architecture](./docs/architecture.md) - Read more about how this library is organized and the parts that make up and compose the utilities
- [Deep Dive into Sizing](./docs/deep-dive.md) - Sizing is bar none one of the hardest things to get right and stay right. Learn how we derived a scalable sizing model based upon a few key configuration points
- [To-do's](./docs/todo.md) - View the checklist of outstanding items in order to fully stabilize the concepts
