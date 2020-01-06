import React from "react";

import { ButtonAction } from "./ButtonAction";

export default {
  component: ButtonAction,
  title: "Core|Buttons & Links/ButtonAction"
};

export const base = () => <ButtonAction label="This is an action button" />;
export const defaultWithIcon = () => (
  <ButtonAction label="This is an action button" icon="pencil" />
);
export const sizeSm = () => (
  <ButtonAction label="This is an action button" size="sm" />
);
export const sizeSmWithIcon = () => (
  <ButtonAction label="This is an action button" size="sm" icon="share" />
);
export const sizeMd = () => (
  <ButtonAction label="This is an action button" size="md" />
);
export const sizeMdWithIcon = () => (
  <ButtonAction label="This is an action button" size="md" icon="trash" />
);
