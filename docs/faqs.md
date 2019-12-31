# FAQs

Let's see if we can't convince you...

## Why should I be using a typesafe design system?

The real question is _why not_ use a typesafe design system? Think about some of the things that we encounter as front-end developers.

- Manually converting `px` values to `em` or `rem`
- 4 or 5 seemingly different yet similar colors of red
- `ctrl + f` hex values across projects or repositories
- Wondering if the `17px` spacing value in InVision is correct or not
- ... more to come ...

The benefits of using utility based design system that utilizes type-saftey is that you can forget about those things above. Need to make a size? Use the `makeSize` utility and pick the value that appears.

## What are the main benefits of using a typesafe design system?

## Refactoring is easy

Thanks to typescript, changing an interface or updating a value is as simple as making the change and then letting the compiler tell you where your changes are going to fail. This makes refactoring as easy as changing one value and letting typescript do the rest of the work.

## Utility based implementation

All static values such as colors, line heights, sizes, etc... are worked out in advance between design and development, configured, and then never have to be worried about again. The utilities implement those decisions in a seamless way through always providing you with the proper values.

## Easily implement significant change

The companies brand changed and you need to update your vertical rhythm or change primary color or increase your baseline grid? Update the base configurations and they will automatically be applied to the resulting system

## Reduced mental load = increased time savings

The utilities reduce the mental load on the individual engineer who is transforming the design to the code. Static values can be passed to the utilities and the utilities do the proper conversions based upon the configuration values. e.g. manually converting pixel values to rems or ems.

## Reduce / virtually eliminate visual inconsistency

## Reduce / virtually eliminate visual design system defects

Never have to worry about if a shade of color is correct. Opening the inspector to check the hex value is now a thing of the past.

## Why wouldn't I just use Material or Bootstrap?
