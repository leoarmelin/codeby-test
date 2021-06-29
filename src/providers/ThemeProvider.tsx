import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#D1D8E5",
    bgAccept: "#C7FFA6",
    grey: "#DEDEDE",
    primary: "#FFF",
    secondary: "#3B74F2",
    textAccept: "#22811D",
    textGrey: "#BBBBBB",
  },
  constants: {
    borderRadiusAccept: "2rem",
    borderRadiusBtn: "0.75rem",
    borderRadiusMain: "1rem",
    maxWidth: "30rem",
  },
};

interface IThemeProps {
  children: React.ReactNode;
}

const Theme = ({ children }: IThemeProps): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
