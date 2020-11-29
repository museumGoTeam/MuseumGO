import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import Snackbar from './atomic/atoms/Snackbar'
import theme from "./theme";
import SplashP from "./atomic/pages/SplashP";
import StepsP from "./atomic/pages/StepsP";
import RoomScanP from "./atomic/pages/RoomScanP";
import PoiP from "./atomic/pages/PoiP";
import ItineraryP from "./atomic/pages/ItineraryP";
import { useSelector } from "react-redux";
import { IAppState } from "./store/types";

const Stack = createStackNavigator();

const Routes = () => {
  const connected = useSelector((state: IAppState) => state.connected)

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          {!connected ? (
            <Stack.Screen name="Splash" component={SplashP} />
          ) : (
              <>
                <Stack.Screen name="Steps" component={StepsP} />
                <Stack.Screen name="RoomScan" component={RoomScanP} />
                <Stack.Screen name="PoiList" component={PoiP} />
                <Stack.Screen name="Itinerary" component={ItineraryP} />
              </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
      <Snackbar />
    </PaperProvider>
  );
};

export default Routes;
