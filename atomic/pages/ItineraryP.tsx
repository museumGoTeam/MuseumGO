import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useSelector } from "react-redux";
import useClient from "../../hooks/useClient";
import { IAppState } from "../../store/types";
import { TEntityNumber } from "../../types";
import Cell from "../atoms/Cell";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation()
  const [state, setState] = React.useState<ItineraryPS>(initialS);
  const { poiSelected, roomLocated } = useSelector((state: IAppState) => state);

  React.useEffect(() => {
    (async () => {
      const itinerary = await client.getItinerary({poiPos: poiSelected?.pos, roomPos: roomLocated?.pos});
      setState({loading: false, data: itinerary})
    })();
  }, []);


  const onBack = () => {
    navigation.navigate("PoiList")
  }

  if (state.loading) return <View />

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.arrowButton} onPress={onBack}>
        <FontAwesome5 name="arrow-left" size={32} color="black" />
      </TouchableOpacity>

      {state.data && state.data.map((row, rowIndex) => {
        return (
          <View key={rowIndex} style={styles.row}>
            {row.map((entity, entityIndex) => {
              return <Cell key={entityIndex} entity={entity} />;
            })}
          </View>
        );
      })}
    </View>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      paddingTop: theme.utils.hp2dp(8),
      paddingHorizontal: theme.utils.wp2dp(2),
    },
    arrowButton: {
      marginVertical: theme.utils.hp2dp(2),
      marginHorizontal: theme.utils.wp2dp(2)
    },
    row: {
      flexDirection: "row",
    },
  });
