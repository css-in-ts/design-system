import { sizeConfig } from "../configs";
import { SpaceProperties } from "../types/composite";
import { convertToUnits } from "./makeSize";
import { Size } from "../types/primitive";

const createLinearSpaceSize = (sizeValue: number): string => {
  if (sizeValue % sizeConfig.baselineGrid === 0) {
    console.debug(sizeValue);
    console.debug(convertToUnits(sizeValue));
    return convertToUnits(sizeValue);
  }
  throw new Error(
    `"${sizeValue}" is not a multiple of your baselineGrid of "${sizeConfig.baselineGrid}".
    
You have elected to use a "${sizeConfig.spaceScale}" spacing system. This means that you may provide a custom pixel value but that value must be a multiple of your baselineGrid.

Check the "sizeConfig.baselineGrid" value of your sizeConfig again and make sure that you're providing a spacing value that is a correct multiple of your grid system.`
  );
};

const createExponentialSpaceSize = (sizeValue: Size): string => {
  console.debug(sizeValue);
  return "100px";
};

/**
 * @todo need to make this typesafe based upon the value set
 * in the configuration... is that even possible?
 */
export const makeSpace = ({ value }: SpaceProperties): string => {
  if (typeof value === "number" && sizeConfig.spaceScale === "linear") {
    return createLinearSpaceSize(value);
  } else {
    return createExponentialSpaceSize(value as Size);
  }
};
