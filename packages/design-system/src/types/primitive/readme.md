# Primitives

## Description

Each file inside of this directory represents one design system primitive. It can be composed of multiple types that make up that primitive. Those composable types can and most likely should be exported for use in any of the supporting util functions, but in the end, there should only be one default export.

## Rules

- Primitive type exports should only be 1 word
- Primitive types can be composed of other exported base primitive types
- Primitive type files should contain 1 default export which is the Primitive that is to be exposed via the `index.ts` interface file. This is the primitive type that other applications that import this library will be able to see and the primitive that all utils will use.

## Todo

- [ ] Dynamic configuration of primitive values for JS package use
