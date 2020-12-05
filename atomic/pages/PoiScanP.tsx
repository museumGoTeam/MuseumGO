import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { IAppState } from '../../store/types'
import Message from '../atoms/Snackbar'
import QRCodeScanT from '../templates/QRCodeScanT'

export default function PoiScanP() {
    const theme = useTheme()    
    const styles = useStyles(theme)
    const navigation = useNavigation()
    const poiSelected = useSelector((state: IAppState) => state.poiSelected)

    const onPoIScan = (poiID: string) => {
        console.log("OUOH")
        if (poiSelected) {
            if (poiSelected._id !== poiID) {
                Message.error("You didn't select this point of interest")
            } else {
                navigation.navigate("PoiDetails")
            }
        }
    }

    return (
        <View style={styles.root}>
            <QRCodeScanT onScanned={onPoIScan}  />
        </View>
    )
}


const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    root: {
        flex: 1,
    }
})