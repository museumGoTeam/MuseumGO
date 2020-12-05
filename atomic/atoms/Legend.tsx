
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Typography from './Typography'


type LegendProps = {
    color: string,
    name: string,
    size: number
}


export default function Legend({color, name, size}: LegendProps) {
    const theme = useTheme()
    const styles = useStyles(theme,color,size)
    return (
        <View style={styles.root}>
          <View style={styles.legend} />
          <Typography>{name}</Typography>
        </View>

    )
}


const useStyles = (theme: ReactNativePaper.Theme, color: string, size: number) => StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center"
    },
    legend: {
        width: size,
        height: size,
        backgroundColor: color,
        marginHorizontal: theme.utils.wp2dp(2),
        marginVertical: theme.utils.hp2dp(1)
    }
}) 
