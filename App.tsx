import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import StoreProvider from './container/store'
import Routes from './Routes';



export default function App() {
  const [fontsLoaded] = useFonts({
    'Tesla': require('./assets/fonts/TESLA.ttf'),
    "Roboto": require('./assets/fonts/Roboto.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <View style={styles.root}>
      <StoreProvider>
        <Routes />
      </StoreProvider>
      <StatusBar style="dark"  />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
