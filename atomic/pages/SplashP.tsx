import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import SplashT from "../templates/SplashT";
import { useTheme } from "react-native-paper";
import useClient from "../../hooks/useClient";
import { useDispatch } from "react-redux";
import {onInit} from '../../store/reducer'


const SplashP: React.FC = () => {
  const theme = useTheme()
  const styles = useStyles(theme)
  const client = useClient()
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    (async () => {
        const status = await client.checkCon()
        if (status) dispatch(onInit())
      }
    )()
  }, [client, dispatch, onInit]) 

  return (
    <View style={styles.root}>
      <SplashT title="app_name" subtitle="app_subtitle">
        <ActivityIndicator size="large" color="#ffffff" style={styles.indicator} />
      </SplashT>
    </View>
  );
};

const useStyles = (theme: ReactNativePaper.Theme ) => StyleSheet.create({
  root: {
    flex: 1
  },
  indicator: {
    marginVertical: theme.utils.hp2dp(2)
  }
})

export default SplashP;
