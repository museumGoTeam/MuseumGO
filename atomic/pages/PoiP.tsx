import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import useClient from "../../hooks/useClient";
import { IAPIState, IPOI } from "../../types";
import Searchbar from "../molecules/Searchbar";
import PoiItem from "../organisms/PoiItem";

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
      {pois.loading ? (
        <Text>Loading ...</Text>
      ) : (
        pois.data && (
          <ScrollView>
            {pois.data.map((poi) => (
              <PoiItem key={poi._id} img={poi.image} name={poi.name} />
            ))}
          </ScrollView>
        )
      )}
    </View>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      paddingVertical: 40,
      paddingHorizontal: 32,
    },
    searchbar: {
      marginBottom: theme.utils.hp2dp(4),
    },
  });
