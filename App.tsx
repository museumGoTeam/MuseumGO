import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import reducer from './store/reducer'
import Routes from './Routes';



const store = configureStore({reducer})

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
      <Provider store={store}>
        <Routes />
      </Provider>
      <StatusBar style="dark"  />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
