
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import theme from '../../theme';
import Typography from '../atoms/Typography';
import { LinearGradient } from 'expo-linear-gradient';
import { Language } from '../../locale';


type SplashTProps = {
  title: keyof Language
  subtitle: keyof Language
}

const SplashT: React.FC<SplashTProps> = ({title, subtitle, children}) => {

    const {utils} = useTheme()
  

    return (
      <View style={styles.root}>
          
          <LinearGradient  
          // Background Linear Gradient
          colors={[theme.colors.primary, theme.colors.secondary]}
          style={[StyleSheet.absoluteFill]} 
          /> 
          <Typography variant="h3" style={styles.title}>MuseumGO</Typography>
          <Typography style={styles.subtitle}>The information indoor tracking learning</Typography>
          {
            children
          }
      </View>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
      color:"white",
      fontFamily: "Tesla"
  },
  subtitle:{
    color:"white",
  }
})

export default SplashT 