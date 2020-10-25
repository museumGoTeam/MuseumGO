import { Dimensions } from "react-native";
import { DefaultTheme } from "react-native-paper";
import { widthPercentageToDP as wp2dp, heightPercentageToDP as hp2dp } from "react-native-responsive-screen";
import I18n from "../locale";
const screenW = Dimensions.get("window").width;
const screenH = Dimensions.get("window").height;


const theme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#AF1055",
    secondary: "#560156",
    transparent: "rgba(0,0,0,0)",
    grey: {
      light: "rgb(238, 238, 238)",
      main: "rgba(0, 0, 0, 0.3)",
      dark: "rgba(0, 0, 0, 0.54)",
    },
    background: "#FFFFF",
    disabled: "rgba(0, 0, 0, 0.12)",
  },
  typography: {
    h1: wp2dp(16),
    h2: wp2dp(14),
    h3: wp2dp(12),
    h4: wp2dp(10),
    h5: wp2dp(8),
    h6: wp2dp(6),
    body: wp2dp(4),
    subtitle: wp2dp(2)
  },
  utils: {
    wp2dp,
    hp2dp,
    locale: (text) => I18n.t(text),
    makeCircle: () => Math.round(screenW + screenH) / 2,
  },
};

export default theme;