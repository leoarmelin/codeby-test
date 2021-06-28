import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      bgAccept: string;
      grey: string;
      primary: string;
      secondary: string;
      textAccept: string;
    };
    constants: {
      borderRadiusAccept: string;
      borderRadiusBtn: string;
      borderRadiusMain: string;
      maxWidth: string;
    };
  }
}
