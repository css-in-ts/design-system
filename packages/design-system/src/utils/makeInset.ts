// import { CSSPositionOffsets, makeSpace } from "./makeSpace";

// type InsetCategories = "dynamic" | "custom";

// interface MakeInsetParams {
//   type: InsetCategories;
//   sizes?: CSSPositionOffsets;
// }

// type MakeInset = (params: MakeInsetParams) => string;

// export const makeInset: MakeInset = ({
//   type = "dynamic",
//   sizes: {
//     top = undefined,
//     right = undefined,
//     bottom = undefined,
//     left = undefined
//   } = {
//     top: undefined,
//     right: undefined,
//     bottom: undefined,
//     left: undefined
//   }
// }) => {
//   const insetString = `padding: ${makeSpace(type, top)} ${makeSpace(
//     type,
//     right
//   )} ${makeSpace(type, bottom)} ${makeSpace(type, left)}`;
//   if (type !== "custom") {
//     return insetString;
//   }

//   console.warn(
//     "You're using a size that is defined outside of the parameters of the design system. Boy I do hope you know what you're doing..."
//   );
//   return insetString;
// };
