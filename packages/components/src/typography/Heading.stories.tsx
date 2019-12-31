import React from "react";

import { Heading } from "./Heading";
import { Baseline } from "../development";

export default {
  component: Heading,
  title: "Core|Typography/Heading"
};

export const heading = () => (
  <>
    <Heading>Heading default - H1</Heading>
    <Heading fontSize="h1">Heading H1 (xxl)</Heading>
    <Heading fontSize="h2">Heading H2 (xl)</Heading>
    <Heading fontSize="h3">Heading H3 (lg)</Heading>
    <Heading fontSize="h4">Heading H4 (md)</Heading>
    <Heading fontSize="h5">Heading H5 (sm)</Heading>
  </>
);
export const headingWithBaseline = () => (
  <>
    <Baseline />
    <Heading>Heading default - H1</Heading>
    <Heading fontSize="h1">Heading H1 (xxl)</Heading>
    <Heading fontSize="h2">Heading H2 (xl)</Heading>
    <Heading fontSize="h3">Heading H3 (lg)</Heading>
    <Heading fontSize="h4">Heading H4 (md)</Heading>
    <Heading fontSize="h5">Heading H5 (sm)</Heading>
  </>
);
