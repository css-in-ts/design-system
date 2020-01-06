import React from "react";

import { Icon } from "./Icon";

export default {
  component: Icon,
  title: "Core|Typography/Icon"
};

export const icon = () => (
  <>
    <Icon icon="rocket" iconSize="h1" />
    <Icon icon="rocket" iconSize="h2" />
    <Icon icon="rocket" iconSize="h3" />
    <Icon icon="rocket" iconSize="h4" />
    <Icon icon="rocket" iconSize="xxl" />
    <Icon icon="rocket" iconSize="xl" />
    <Icon icon="rocket" iconSize="lg" />
    <Icon icon="rocket" iconSize="md" />
    <Icon icon="rocket" iconSize="sm" />
    <Icon icon="rocket" iconSize="xs" />
    <Icon
      icon="rocket"
      iconSize="xxs"
      iconColor={{ scalable: { color: "primary" } }}
    />
  </>
);
