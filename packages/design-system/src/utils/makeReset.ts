type ResetElements = "heading" | "paragraph" | "list" | "button" | "input";

type Resets = { [key in ResetElements]: any };

const globalResets = {
  boxSizing: "border-box"
};

const resets: Resets = {
  heading: {
    ...globalResets,
    margin: 0
  },
  paragraph: {
    ...globalResets,
    margin: 0
  },
  list: {
    ...globalResets,
    margin: 0,
    padding: 0,
    textIndent: 0,
    listStyleType: "none"
  },
  button: {
    ...globalResets,
    margin: 0,
    padding: 0,
    border: "none",
    background: "none",
    cursor: "pointer"
  },
  input: {
    ...globalResets,
    margin: 0,
    padding: 0,
    border: 0
  }
};

export const makeReset = (element: ResetElements): Resets[typeof element] =>
  resets[element];
