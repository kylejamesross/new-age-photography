import React from "react";
import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    lynxWhite: "#f5f6fa",
    hoverLynxWhite: "#e1e2e6",
  },
  contentWidth: "1100px",
};

const StylesProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StylesProvider;
