import { InsetOutsetProperties, SpaceProperties } from "../types/composite";
import { makeSpace } from "./makeSpace";

const reconcileValues = (
  specificPosition?: SpaceProperties,
  generalPosition?: SpaceProperties
): string => {
  if (specificPosition) {
    return makeSpace(specificPosition);
  }
  if (!specificPosition && generalPosition) {
    return makeSpace(generalPosition);
  }
  return "0";
};

const createPositionString = ({
  top,
  bottom,
  left,
  right,
  vertical,
  horizontal
}: Partial<InsetOutsetProperties>): string => {
  // PRESERVE THIS ORDER
  const positionObj = {
    top: reconcileValues(top, vertical),
    right: reconcileValues(right, horizontal),
    bottom: reconcileValues(bottom, vertical),
    left: reconcileValues(left, horizontal)
  };

  /**
   * Need to transform the properties into a string
   * to be sure that we get a proper style object
   * for any css-in-js solution
   */
  return Object.values(positionObj).reduce<string>((accum, value) => {
    const stringifiedAttribute = `${value}`;
    if (accum === "") {
      return stringifiedAttribute;
    }
    return `${accum} ${stringifiedAttribute}`;
  }, "");
};

export const makeInset = (position: Partial<InsetOutsetProperties>): string =>
  `padding: ${createPositionString(position)}`;
export const makeOutset = (position: Partial<InsetOutsetProperties>): string =>
  `margin: ${createPositionString(position)}`;
