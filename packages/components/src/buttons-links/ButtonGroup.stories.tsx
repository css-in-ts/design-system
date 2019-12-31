import React from "react";

import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

export default {
  component: ButtonGroup,
  title: "Core|Buttons & Links/ButtonGroup"
};

export const base = () => (
  <ButtonGroup>
    <Button styleType="primary" label="Submit" />
    <Button styleType="secondary" label="Cancel" />
  </ButtonGroup>
);
export const inlineGrouping = () => (
  <ButtonGroup layout="inline">
    <Button styleType="primary" label="Submit" />
    <Button styleType="secondary" label="Cancel" />
  </ButtonGroup>
);
export const stackedGrouping = () => (
  <ButtonGroup layout="stacked">
    <Button styleType="primary" label="Submit" />
    <Button styleType="secondary" label="Cancel" />
  </ButtonGroup>
);
