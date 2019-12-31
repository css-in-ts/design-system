import React from "react";

import { Button } from "./Button";

export default {
  component: Button,
  title: "Core|Buttons & Links/Button"
};

export const allTypes = () => (
  <>
    <Button label="primary" styleType="primary" />
    <Button label="secondary" styleType="secondary" />
    <Button label="warning" styleType="warning" />
    <Button label="error" styleType="error" />
  </>
);
export const primary = () => <Button label="primary" />;
export const secondary = () => (
  <Button label="secondary" styleType="secondary" />
);
export const disabled = () => <Button label="primary" disabled />;
export const loading = () => <Button label="primary" loading />;
