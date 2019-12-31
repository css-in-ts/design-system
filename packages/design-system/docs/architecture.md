# Architecture

It is broken out into 3 distinctive top level directories of `types`, `configs` and `utils`. See the below diagram:

```txt
📦src
 ┣ 📂configs
 ┣ 📂types
 ┃ ┣ 📂composite
 ┃ ┗ 📂primitive
 ┗ 📂utils
```

## `types/`

These are the base types that construct the type-system used throughout the project. It is broken up into 2 directories.

1. **Primitives** - base types that are mutually exclusive to each other. They represent the absolute lowest fundamental idea of a design system
2. **Composites** - types that are derived from primitive types (also could be considered composable types). These are mostly the types that are to be used throughput the design system and are commonly shared amongst the utilities

These types are used throughout the project and supply the type information to the base configurations.

## `configs/`

These are simple configuration objects, defined by the types inside of the types directory, are the valued building blocks for building out the boundaries around the design system. They include sensible defaults and a single point of entry to configuring the values of the design system.

They can include things like

- color values
- size maps
- overrides
- modular scale ratios
- baselineGrid integers

Essentially, anything that you'd typically use in a design system.

## `utils/`

This directory includes the utilities needed to implement the design system inside of a typescript project. These utilities combine the composite types with the configuration variables to provide you proper type-safety.
