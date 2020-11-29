import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { CELL_SIZE_X, CELL_SIZE_Y } from "../../constants";
import { TEntityNumber } from "../../types";

function renderEntityColor(entity: TEntityNumber): string {
  switch (entity) {
    case 0:
      return "#d1d1d1";
    case 1:
      return "#000000";
    case 2:
      return "#ff0000";
    case 3:
      return "#00ff00";
    case 4:
      return "brown";
    case 5:
      return "#f5ff3b";
  }
}

interface CellProps {
    entity: TEntityNumber
}

export default function Cell({entity}: CellProps) {
  const theme = useTheme()
  const styles = useStyles(theme, renderEntityColor(entity))
  return (
    <View
      style={styles.root}
    />
  );
}




const useStyles = (theme: ReactNativePaper.Theme, backgroundColor: string) => StyleSheet.create({
    root: {
        width: CELL_SIZE_X,
        height: CELL_SIZE_Y,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor
    }
})
