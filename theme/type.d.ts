import {Language} from "../locale";

declare global {
  export namespace ReactNativePaper {
    interface ThemeColors {
      grey: ColorVariant;
      secondary: string;
      transparent: string;
    }
    interface ThemeFont {
      fontFamily: string;
      fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  }
    interface ThemeFonts {
      regular: ThemeFont;
      medium: ThemeFont;
      light: ThemeFont;
      thin: ThemeFont;
  }
    interface Theme {
      utils: Utils;
      typography: {
        h1: number
        h2: number
        h3: number,
        h4: number,
        h5: number;
        h6: number,
        body: number,
        subtitle: number
      },
    }
  }
}

export interface Utils {
  wp2dp: (percent: string | number) => number;
  hp2dp: (percent: string | number) => number;
  locale: (text: keyof Language) => string;
  makeCircle: () => number;
}

export interface ColorVariant {
  light: string;
  main: string;
  dark: string;
}

export type TypographyType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "subtitle"
export type TypographyWeight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "normal" | "bold" | undefined
export type JustifyType = "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly" | undefined
export type AlignType = "baseline" | "stretch" | "flex-start" | "flex-end" | "center" | undefined
export type AlignTextType = "auto" | "center" | "left" | "right" | "justify" | undefined