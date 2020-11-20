import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import PoiItem from '../organisms/PoiItem'

export default function PoiP() {
    const theme = useTheme()
    const styles = useStyles(theme)

    return (
        <View style={styles.root}>
            <PoiItem />
        </View>
    )
}


const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    root: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 32,
        alignItems: "center"
    }
})