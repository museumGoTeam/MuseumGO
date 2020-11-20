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

const Stack = createStackNavigator();

const Routes = () => {
  const [loading, setLoading] = React.useState<boolean>(true); //When the fetch is finished, the application will display the content

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PoiList"
          screenOptions={{ headerShown: false }}
        >
          {loading ? (
            <Stack.Screen name="Splash">
              {() => <SplashP setLoading={setLoading} />}
            </Stack.Screen>
          ) : (
              <>
                <Stack.Screen name="Steps" component={StepsP} />
                <Stack.Screen name="RoomScan" component={RoomScanP} />
                <Stack.Screen name="PoiList" component={PoiP} />
              </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
      <Snackbar />
    </PaperProvider>
  );
};

export default Routes;
