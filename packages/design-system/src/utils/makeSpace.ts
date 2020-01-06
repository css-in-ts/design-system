import { sizeConfig } from "../configs";
import { SpaceProperties } from "../types/composite";
import { convertToUnits } from "./makeSize";
import { Size } from "../types/primitive";

const baselineGridMismatchWarning = (
  sizeValue: number
): string => `"${sizeValue}" is not a multiple of your baselineGrid of "${sizeConfig.baselineGrid}".
    
You have elected to use a "${sizeConfig.spaceScale}" spacing system. This means that you may provide a custom pixel value but that value must be a multiple of your baselineGrid.

Check the "sizeConfig.baselineGrid" value of your sizeConfig again and make sure that you're providing a spacing value that is a correct multiple of your grid system.`;

const alignsToBaselineGrid = (sizeValue: number): boolean =>
  sizeValue % sizeConfig.baselineGrid === 0;

const createLinearSpaceSize = (sizeValue: number): string => {
  if (alignsToBaselineGrid(sizeValue)) {
    console.debug(sizeValue);
    console.debug(convertToUnits(sizeValue));
    return convertToUnits(sizeValue);
  }
  throw new Error(baselineGridMismatchWarning(sizeValue));
};

const createCustomSpaceSize = (sizeValue: number): string => {
  if (!alignsToBaselineGrid(sizeValue)) {
    console.warn(baselineGridMismatchWarning(sizeValue));
  }
  console.debug(sizeValue);
  console.debug(convertToUnits(sizeValue));
  return convertToUnits(sizeValue);
};

const createExponentialSpaceSize = (sizeValue: Size): string => {
  console.debug(sizeValue);
  return "100px";
};

export const makeSpace = (value: SpaceProperties): string => {
  console.log(value);
  if (typeof value === "number" && sizeConfig.spaceScale === "linear") {
    return createLinearSpaceSize(value);
  }
  if (typeof value === "string" && value !== "auto") {
    return createExponentialSpaceSize(value);
  }
  if (typeof value === "string" && value === "auto") {
    return value;
  }
  if (typeof value === "object" && value.custom) {
    return createCustomSpaceSize(value.custom);
  }
  return "NO DEFINITION PROVIDED";
};
