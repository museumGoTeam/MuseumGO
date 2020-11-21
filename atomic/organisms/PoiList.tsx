import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { IAPIState, IPOI } from "../../types";
import PoiItem from "./PoiItem";

type PoiListProps = {
  data: IPOI[];
};

export default function PoiList({ data }: PoiListProps) {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.scrollContainer}
    >
      {data.map((poi) => (
        <PoiItem key={poi._id} {...poi} />
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
