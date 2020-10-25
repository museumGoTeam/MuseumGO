import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const PoiInformationIcon = () => {
  return (
    <View>
      <View style={styles.poiContainer}>
        <Feather name="image" size={64} color="black" />
        <MaterialIcons name="short-text" size={64} color="black" />
      </View>
      <View>
        <View style={{backgroundColor: "black", height: 4, width: "100%", marginVertical: 4}} />
        <View style={{backgroundColor: "black", height: 4, width: "100%", marginVertical: 4}} />
        <View style={{backgroundColor: "black", height: 4, width: "100%", marginVertical: 4}} />
        <View style={{backgroundColor: "black", height: 4, width: "100%", marginVertical: 4}} />
        <View style={{backgroundColor: "black", height: 4, width: "100%", marginVertical: 4}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  poiContainer: {
    flexDirection: "row",
    marginBottom: 32
  },
});

export default PoiInformationIcon;
