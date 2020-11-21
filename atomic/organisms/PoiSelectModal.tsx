import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { onSelectPoi } from "../../store/reducer";
import { IPOI } from "../../types";
import Button from "../atoms/Button";

type PoiSelectModalProps = {
  poi: IPOI
  open: boolean;
  onClose: () => void;
};

export default function PoiSelectModal({ poi, open, onClose }: PoiSelectModalProps) {
  const theme = useTheme();
  const styles = useStyles(theme);
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const onSelect = () => {
    dispatch(onSelectPoi(poi))
    onClose()
    navigation.navigate("Itinerary")
  }

  return (
    <View>
      <Modal isVisible={open} onBackdropPress={onClose}>
        <View style={styles.root}>
          <Text style={styles.title}>
            Are you sure to select the point of interest<Text style={styles.poiName}>{`\n ${poi.name}`}</Text> ?
          </Text>
          <View style={styles.buttonsContainer}>
            <Button label="Yes" onPress={onSelect} style={[styles.button]} labelStyle={{color: "green"}} />
            <Button label="No" color="secondary" onPress={onSelect} style={styles.button} labelStyle={{color: "red"}} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      alignItems: "center",
      backgroundColor: "white",
      paddingHorizontal: theme.utils.wp2dp(2),
      paddingVertical: theme.utils.hp2dp(2),
      borderRadius: 16
    },
    title: {
      fontSize: theme.utils.hp2dp(2),
      textAlign: "center",
      marginVertical: theme.utils.hp2dp(1),
    },
    poiName: {
      fontWeight: "bold"
    },
    buttonsContainer: {
      flexDirection: "row",
      justifyContent: "space-around"
    },
    button: {
      marginHorizontal: theme.utils.wp2dp(1),
      borderRadius: 0,
      backgroundColor: "transparent"
    }
  });
