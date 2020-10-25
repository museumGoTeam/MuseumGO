import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

import CardA from "../atoms/CardA";
import Typography from "../atoms/Typography";
import { useNavigation, useNavigationState } from "@react-navigation/native";


type StepsTProps = {
  icon: React.ReactElement
  title: string
  subtitle: string | undefined
  onSwipe: (step: number) => void
}

const StepsT: React.FC<StepsTProps> = ({icon, title, subtitle, onSwipe}) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const state = useNavigationState(state => state.index)
  const navigation = useNavigation()
  React.useEffect(() => {
    onSwipe(state + 1)
  }, [navigation.isFocused()])

  return (
      <View style={styles.root}>
        <CardA alignItems="center" style={styles.card}>
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>
          <View style={styles.iconContainer}>
            {icon}
          </View>

          <Typography variant="body" fontWeight="bold" align="center">
            {subtitle}
          </Typography>
        </CardA>
      </View>
  );
};

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      width: theme.utils.wp2dp(80),
      height: theme.utils.hp2dp(50),
    },
    iconContainer: {
      flex: 1,
      justifyContent: "center",
    },
  });

export default StepsT;
