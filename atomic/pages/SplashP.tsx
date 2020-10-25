import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import SplashT from "../templates/SplashT";
import { useTheme } from "react-native-paper";

type SplashP = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const SplashP: React.FC<SplashP> = ({setLoading}) => {
  const theme = useTheme()
  const styles = useStyles(theme)
  
  React.useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000)  //Simulate a fetch to the server
    return () => clearTimeout(timeout)
  }, []) 

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
