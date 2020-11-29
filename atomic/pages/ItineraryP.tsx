import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useSelector } from "react-redux";
import { COL_NUMBER, ROW_NUMBER } from "../../constants";
import useClient from "../../hooks/useClient";
import en from "../../locale/en";
import { IAppState } from "../../store/types";
import { TEntityNumber } from "../../types";
import Cell from "../atoms/Cell";

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
  const [state, setState] = React.useState<ItineraryPS>(initialS);
  const { poiSelected, roomLocated } = useSelector((state: IAppState) => state);

  React.useEffect(() => {
    (async () => {
      const itinerary = await client.getItinerary({poiPos: poiSelected?.pos, roomPos: roomLocated?.pos});
      setState({loading: false, data: itinerary})
    })();
  }, []);

  if (state.loading) return <View />

  return (
    <View style={styles.root}>
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
    row: {
      flexDirection: "row",
    },
  });
