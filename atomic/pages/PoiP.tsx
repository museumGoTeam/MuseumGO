import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import Searchbar from "../molecules/Searchbar";
import PoiItem from "../organisms/PoiItem";

export default function PoiP() {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.root}>
      <Searchbar style={styles.searchbar} />
      <PoiItem />
    </View>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      paddingVertical: 40,
      paddingHorizontal: 32,
      alignItems: "center"
    },
    searchbar: {
      marginBottom: theme.utils.hp2dp(4)
    }
  });
