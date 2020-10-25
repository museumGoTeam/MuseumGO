import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import theme from '../../theme';
import Typography from '../atoms/Typography';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const SplashHomeT = () => {

    const [isLoaded] = useFonts({"tesla": require('../../assets/fonts/TESLA.ttf')});
    
    const {utils} = useTheme()
  
    if (!isLoaded) 
    {
        return <AppLoading />;
    } 
    else 
    {
        return (
            <View style={styles.root}>
                
                <LinearGradient  
                // Background Linear Gradient
                colors={[theme.colors.primary, theme.colors.secondary]}
                style={[StyleSheet.absoluteFill]} 
                /> 
                <Typography variant="h3" style={styles.title}>{utils.locale("app_name")}</Typography>
                <Typography style={styles.subtitle}>{utils.locale("app_subtitle")}</Typography>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
      color:"white",
      fontFamily:"tesla",
  },
  subtitle:{
    color:"white",
  }
})

export default SplashHomeT 