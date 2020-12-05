import React from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import useClient from "../../hooks/useClient";
import { IAppState } from "../../store/types";
import { TEntityNumber } from "../../types";
import Cell from "../atoms/Cell";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import Legend from "../atoms/Legend";
import Button from "../atoms/Button";
import QRCodeScanT from "../templates/QRCodeScanT";
import Message from "../atoms/Snackbar";
import Typography from "../atoms/Typography";
import {TapGestureHandler} from 'react-native-gesture-handler'
import { onScan } from "../../store/reducer";
interface ItineraryPS {
  loading: boolean
  data: TEntityNumber[][] | undefined;
}

const initialS: ItineraryPS = {
  loading: true,
  data: undefined
}


export default function ItineraryP() {
  const theme = useTheme();
  const styles = useStyles(theme);
  const client = useClient();
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [state, setState] = React.useState<ItineraryPS>(initialS);
  const [camFullScreen, setCamFullScreen] = React.useState(false)
  const { poiSelected, roomLocated } = useSelector((state: IAppState) => state);

  React.useEffect(() => {
    (async () => {
      const itinerary = await client.getItinerary({poiPos: poiSelected?.pos, roomPos: roomLocated?.pos});
      setState({loading: false, data: itinerary})
    })();
  }, []);


  console.log(camFullScreen)
  const onBack = () => {
    navigation.navigate("PoiList")
  }

  const onPoIScan = (poiID: string) => {
    console.log('SCAN :', poiID)
    if (poiSelected) {
        if (poiSelected._id !== poiID) {
            Message.error("You didn't select this point of interest")
            return
        } 
        dispatch(onScan(poiID))
        navigation.navigate("PoiDetails")
    }
}

  if (state.loading) return <View />

  return (
    <View style={styles.root}>
      {
        /**
         *       <TouchableOpacity style={styles.arrowButton} onPress={onBack}>
        <FontAwesome5 name="arrow-left" size={32} color="black" />
      </TouchableOpacity>
         */
      }

      {state.data && state.data.map((row, rowIndex) => {
        return (
          <View key={rowIndex} style={styles.row}>
            {row.map((entity, entityIndex) => {
              return <Cell key={entityIndex} entity={entity} />;
            })}
          </View>
        );
      })}
      <View style={styles.legends}>
        <Legend color="red" name="Pont of interest" size={16}    />
        <Legend color="green" name="Your position" size={16}    />
        <Legend color="yellow" name="Path" size={16}    />
        <Legend color="gray" name="Floor" size={16}    />
        <Legend color="black" name="wall" size={16}    />
        <Legend color="brown" name="Door" size={16}    />
      </View>
      <View>
      <Typography align="center">Please scan the point of interest {poiSelected?.name} once arrived</Typography>
      </View>
      <View style={styles.cameraContainer}>
        <QRCodeScanT  onScanned={onPoIScan} style={styles.camera} />
      </View>
    </View>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      paddingVertical: theme.utils.hp2dp(8),
      paddingHorizontal: theme.utils.wp2dp(2),
    },
    arrowButton: {
      marginVertical: theme.utils.hp2dp(4),
      marginHorizontal: theme.utils.wp2dp(2)
    },
    row: {
      flexDirection: "row",
    },
    legends: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
      marginVertical: theme.utils.hp2dp(2),
    },
    cameraContainer: {
      flex: 1,
    },
    camera: {
      flex: 1
    }
  });
