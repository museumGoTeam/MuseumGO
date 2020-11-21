import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useSelector } from "react-redux";
import useClient from "../../hooks/useClient";
import useFilter from "../../hooks/useFilter";
import { IAppState } from "../../store/types";
import { IAPIState, IPOI } from "../../types";
import Searchbar from "../molecules/Searchbar";
import PoiList from "../organisms/PoiList";
import PoiT from "../templates/PoiT";

export default function PoiP() {
  const theme = useTheme();
  const styles = useStyles(theme);
  const client = useClient();
  const filter = useFilter()
  const [pois, setPois] = React.useState<IAPIState<IPOI[]> & {searchTerm: string}>({
    loading: true,
    data: undefined,
    searchTerm: ""
  });

  React.useEffect(() => {
    (async () => {
      const res = await client.getPois();
      setPois({ loading: false, data: res, searchTerm: "" });
    })();
  }, []);

  const onSearch = (name: string) => {
    setPois({...pois, searchTerm: name})
  };

  const getByFilter = () => {
    if (pois.data) {
      return filter<IPOI>({arr: pois.data, filter: pois.searchTerm })
    }
    return []
  }

  return (
    <View style={styles.root}>
      <Searchbar style={styles.searchbar} onChangeText={onSearch} />
      {!pois.loading && pois.data ? <PoiList data={pois.searchTerm === "" ? pois.data : getByFilter()} /> : <PoiT />}
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
