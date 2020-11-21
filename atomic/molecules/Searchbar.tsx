import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "react-native-paper";
import SearchIcon from "../../assets/svg/SearchIcon";

type SearchbarProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
};

export default function Searchbar({
  value,
  onChangeText,
  style,
}: SearchbarProps) {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <View style={[styles.root, style]}>
      <SearchIcon fill="#bdbdbd" width={16} height={16} style={styles.icon} />
      <TextInput
        placeholder="Search for a point of interest"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      flexDirection: "row",
      alignItems: "center",
      width: theme.utils.wp2dp(80),
      paddingVertical: theme.utils.hp2dp(2),
      paddingHorizontal: theme.utils.wp2dp(4),
      backgroundColor: "white",
      borderRadius: theme.utils.wp2dp(4),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    icon: {
      marginHorizontal: 8,
    },
    input: {
      flex: 1,
    },
  });
