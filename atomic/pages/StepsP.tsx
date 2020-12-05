import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage'
import Typography from "../atoms/Typography";
import StepsT from "../templates/StepsT";
import steps from "../../constants/steps";
import StepBullets from "../atoms/StepBullets";
import Button from "../atoms/Button";
import { useNavigation } from "@react-navigation/native";


const Tab = createMaterialTopTabNavigator();

const StepsP = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation()
  const [currentStep, setCurrentStep] = React.useState<number>(0)


  React.useEffect(() => {
    (async () => {
        try {
          await AsyncStorage.setItem('@first_entry', "true")
        } catch {

        }
      }
    )()
  }, [])

  const onStepChanged = (step: number) => {
    setCurrentStep(step)
  }

    const onStepsFinished = () => {
      navigation.navigate("RoomScan")
  } 

  return (
    <View style={styles.root}>
      <Typography variant="h4" fontWeight="bold" style={styles.title}>
        MuseumGO
      </Typography>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          showIcon: false,
          style: { height: 0 },
        }}
      >
        {
          steps.map((step, index) => (
            <Tab.Screen name={step.screenName} key={step.screenName}>
              {
                () => {
                  return <StepsT icon={step.icon} title={step.title} subtitle={step.subtitle} onSwipe={onStepChanged} />
                }
              }
            </Tab.Screen>
          ))
        }
      </Tab.Navigator>
      {
        currentStep < 6 ?   <StepBullets activeStep={currentStep} /> : <Button label="Get ready to learn" onPress={onStepsFinished} labelStyle={{color: "white"}} />
      }

    </View>
  );
};

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      paddingVertical: theme.utils.hp2dp(8),
      paddingHorizontal: theme.utils.wp2dp(4),
    },
    stepper: {
      flex: 1,
    },
    title: {
      alignSelf: "center",
      fontFamily: "Tesla",
      color: theme.colors.secondary,
      marginBottom: theme.utils.hp2dp(4),
    },
  });

export default StepsP;
