import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Global, css } from "@emotion/core";
import { Grommet } from "grommet";

const theme = {
  colors: {
    white: "#fff",
    darkLynxWhite: "#e1e2e6",
    darkerLynxWhite: "#c8cad1",
    draculaOrchid: "#2d3436",
    darkDraculaOrchid: "#282e30",
    lightDraculaOrchid: "#7f8c8d",
    silver: "#bdc3c7",
  },
  contentWidth: "1100px",
};

const StylesProvider = ({ children }) => (
  <Grommet>
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
        `}
      />
      {children}
    </ThemeProvider>
  </Grommet>
);

export default StylesProvider;
