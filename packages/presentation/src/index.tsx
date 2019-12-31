import React, { FC } from "react";
import ReactDOM from "react-dom";
import Redbox from "redbox-react";
import { AppContainer } from "react-hot-loader";

import { Presentation } from "./presentation";

const CustomErrorReporter: FC<{ error: Error }> = ({ error }) => (
  <Redbox error={error} />
);

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation />
  </AppContainer>,
  document.getElementById("root")
);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept("./presentation", () => {
    const NextPresentation = require("./presentation").default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextPresentation />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
