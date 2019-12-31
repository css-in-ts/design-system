type ResetElements = "heading" | "paragraph" | "list" | "button" | "input";

type Resets = { [key in ResetElements]: any };

const resets: Resets = {
  heading: {
    margin: 0
  },
  paragraph: {
    margin: 0
  },
  list: {
    margin: 0,
    padding: 0,
    textIndent: 0,
    listStyleType: "none"
  },
  button: {
    margin: 0,
    padding: 0,
    border: "none",
    background: "none",
    cursor: "pointer"
  },
  input: {
    margin: 0,
    padding: 0,
    border: 0
  }
};

export const makeReset = (element: ResetElements): Resets[typeof element] =>
  resets[element];
