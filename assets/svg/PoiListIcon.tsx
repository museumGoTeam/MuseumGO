import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const PoiListItem = () => {
  return (
    <View style={styles.poiContainer}>
      <Feather name="image" size={64} color="black" />
      <MaterialIcons name="short-text" size={64} color="black" />
    </View>
  );
};

const PoiListIcon = () => {
  return (
    <>
      <PoiListItem />
      <PoiListItem />
      <PoiListItem />
    </>
  );
};

const styles = StyleSheet.create({
  poiContainer: {
    flexDirection: "row",
  },
});

export default PoiListIcon;
