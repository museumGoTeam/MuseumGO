import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Typography from '../atoms/Typography'

export default function PoiDetailsP() {
    const theme = useTheme()
    const styles = useStyles(theme)
    return (
        <View style={styles.root}>
            <Typography>Point of interest details</Typography>
        </View>
    )
}


const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})