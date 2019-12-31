import React from "react";

import { Title } from "./Title";

export default {
  component: Title,
  title: "Core|Typography/Title"
};

export const title = () => (
  <>
    <Title size="lg">Lorem ipsum</Title>
    <Title size="md">lorem ipsum</Title>
    <Title size="sm">lorem ipsum</Title>
  </>
);
