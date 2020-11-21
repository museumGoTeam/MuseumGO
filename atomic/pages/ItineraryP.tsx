import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useTheme } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { IAppState } from '../../store/types'

export default function ItineraryP() {
    const theme = useTheme()
    const styles = useStyles(theme)
    const {poiSelected, roomLocated} = useSelector((state: IAppState) => state)

    return (
        <View style={styles.root}>
            <Text>Itinerary to {poiSelected?.name} from room {roomLocated?.label}  </Text>
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
