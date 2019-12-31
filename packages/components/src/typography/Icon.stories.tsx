import React from "react";

import { Icon } from "./Icon";

export default {
  component: Icon,
  title: "Core|Typography/Icon"
};

export const icon = () => (
  <>
    <Icon icon="rocket" iconSize={{ size: "h1" }} />
    <Icon icon="rocket" iconSize={{ size: "h2" }} />
    <Icon icon="rocket" iconSize={{ size: "h3" }} />
    <Icon icon="rocket" iconSize={{ size: "h4" }} />
    <Icon icon="rocket" iconSize={{ size: "xxl" }} />
    <Icon icon="rocket" iconSize={{ size: "xl" }} />
    <Icon icon="rocket" iconSize={{ size: "lg" }} />
    <Icon icon="rocket" iconSize={{ size: "md" }} />
    <Icon icon="rocket" iconSize={{ size: "sm" }} />
    <Icon icon="rocket" iconSize={{ size: "xs" }} />
    <Icon
      icon="rocket"
      iconSize={{ size: "xxs" }}
      iconColor={{ type: "scalable", color: "primary" }}
    />
  </>
);
