import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

type StepBulletsProps = {
    activeStep: number
}

const StepBullets: React.FC<StepBulletsProps> = ({activeStep}) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <View style={styles.root}>
      <View style={[styles.bullet, activeStep === 1 ? styles.stepActive : styles.stepNotActive]} />
      <View style={[styles.bullet, activeStep === 2 ? styles.stepActive : styles.stepNotActive]} />
      <View style={[styles.bullet, activeStep === 3 ? styles.stepActive : styles.stepNotActive]} />
      <View style={[styles.bullet, activeStep === 4 ? styles.stepActive : styles.stepNotActive]} />
      <View style={[styles.bullet, activeStep === 5 ? styles.stepActive : styles.stepNotActive]} />
    </View>
  );
};

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    bullet: {
      width: theme.utils.wp2dp(8),
      height: theme.utils.wp2dp(8),
      borderRadius: theme.utils.makeCircle(),
    },
    stepActive: {
      backgroundColor: theme.colors.primary,
    },
    stepNotActive: {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "black",
    },
  });

export default StepBullets;
