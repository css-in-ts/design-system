import {
  ResponsiveDeviceTypes,
  responsiveBreakpoints
} from "../configs/responsive.config";

interface ResponsiveInterface<T> {
  beginAt?: ResponsiveDeviceTypes | undefined;
  endAt?: ResponsiveDeviceTypes | undefined;
  style: T;
}

/**
 * Use this styled media query to tell styled components
 * when it should be applying styles. If you're doing real "mobile first"
 * development, you're only going to use the `min` parameter.
 *
 * Let's say you want to apply a style when the viewport reaches
 * desktop. You'd write the following statement and it would read
 * "apply this only when the viewport reaches a minimum width of `desktop`"
 *
 * ```js
 * makeResponsive({ beginAt: "desktop", style: ``});
 * ```
 *
 * Let's say you want to apply a tablet style, but want it to stop
 * when it reaches desktop. You'd write the following statement and it
 * would read "apply this style between a minimum of `tabletLandscape` and a maximum of
 * `desktop`". This would apply the style between the viewport sizes of
 * tabletLandscape and desktop
 *
 * ```js
 * makeResponsive({ beginAt: "tabletLandscape", endAt: "desktop", style: ``});
 * ```
 *
 * @param beginAt this viewport size, apply the style (defaults to 0)
 * @param endAt this viewport size, stop applying the style (optional)
 */

export function makeResponsive<StyleType = string>({
  beginAt = undefined,
  endAt = undefined,
  style
}: ResponsiveInterface<StyleType>): string {
  if (beginAt && endAt) {
    return `
      @media (min-width: ${
        responsiveBreakpoints[beginAt]
      }px) and (max-width: ${responsiveBreakpoints[endAt] - 1}px) {
        ${style}
      }
    `;
  }
  if (!beginAt && endAt) {
    return `
      @media (max-width: ${responsiveBreakpoints[endAt] - 1}px) {
        ${style}
      }
    `;
  }
  if (beginAt && !endAt) {
    return `
      @media (min-width: ${responsiveBreakpoints[beginAt]}px) {
        ${style}
      }
    `;
  }
  /**
   * If nothing is provided, then return a beginAt width of 0
   */
  return `
    @media (min-width: 0) {
      ${style}
    }
  `;
}
// export const makeResponsive: MakeResponsive = ({
//   beginAt = undefined,
//   endAt = undefined,
//   style
// }) => {
//   if (beginAt && endAt) {
//     return `
//       @media (min-width: ${
//         responsiveBreakpoints[beginAt]
//       }px) and (max-width: ${responsiveBreakpoints[endAt] - 1}px) {
//         ${style}
//       }
//     `;
//   }
//   if (!beginAt && endAt) {
//     return `
//       @media (max-width: ${responsiveBreakpoints[endAt] - 1}px) {
//         ${style}
//       }
//     `;
//   }
//   if (beginAt && !endAt) {
//     return `
//       @media (min-width: ${responsiveBreakpoints[beginAt]}px) {
//         ${style}
//       }
//     `;
//   }
//   /**
//    * If nothing is provided, then return a beginAt width of 0
//    */
//   return `
//     @media (min-width: 0) {
//       ${style}
//     }
//   `;
// };
