import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import useClient from "../../hooks/useClient";
import { IAPIState, IPOI } from "../../types";
import Skeleton from "../atoms/Skeleton";
import Searchbar from "../molecules/Searchbar";
import PoiList from "../organisms/PoiList";
import PoiT from "../templates/PoiT";

export default function PoiP() {
  const theme = useTheme();
  const styles = useStyles(theme);
  const client = useClient();
  const [pois, setPois] = React.useState<IAPIState<IPOI[]>>({
    loading: true,
    data: undefined,
  });

  React.useEffect(() => {
    (async () => {
      const res = await client.getPois();
      setPois({ loading: false, data: res });
    })();
  }, []);

  return (
    <View style={styles.root}>
      <Searchbar style={styles.searchbar} />
      {
        !pois.loading && pois.data ? <PoiList data={pois.data} /> : <PoiT />
      }
    </View>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      paddingVertical: 40,
    },
    searchbar: {
      marginBottom: theme.utils.hp2dp(4),
      alignSelf: "center",
    },
  });
