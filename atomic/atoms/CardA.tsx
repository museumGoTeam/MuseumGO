import React from "react";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import { AlignType, JustifyType } from "../../theme/type";

type CardAProps = {
    style?: StyleProp<ViewStyle>
    justify?: JustifyType
    alignItems?: AlignType
    onPress?: () => void
}

const CardA: React.FC<CardAProps>= ({ style, justify, alignItems,onPress, children }) => {
  const theme = useTheme();
  const styles = useStyles(theme, justify, alignItems);
  return <Pressable onPress={onPress} style={[styles.root, style]}>{children}</Pressable>;
};

const useStyles = (theme: ReactNativePaper.Theme, justify: JustifyType, alignItems: AlignType) =>
  StyleSheet.create({
    root: {
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      paddingVertical: theme.utils.hp2dp(2),
      paddingHorizontal: theme.utils.wp2dp(2),
      justifyContent: justify,
      alignItems: alignItems,
      borderRadius: 8
    },
  });

export default CardA;
