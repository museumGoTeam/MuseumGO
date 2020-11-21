import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";
import PoiItem from "../organisms/PoiItem";

export default function PoiT() {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.scrollContainer}
    >
      {Array.from(new Array(10)).map((_, index) => (
        <PoiItem key={index} />
      ))}
    </ScrollView>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {},
    scrollContainer: {
        alignItems: "center"
    },
  });
