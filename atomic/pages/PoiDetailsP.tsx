import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { IAppState } from '../../store/types'
import Typography from '../atoms/Typography'

export default function PoiDetailsP() {
    const theme = useTheme()
    const styles = useStyles(theme)
    const poi = useSelector((state: IAppState) => state.poiSelected)

    
    return (
        <ScrollView  contentContainerStyle={styles.root}>
            <Typography align="center" variant="h4">{poi?.name}</Typography>
            <Image source={{uri: poi?.image}} style={styles.image} />
            <Typography align="justify">{poi?.description}</Typography>
        </ScrollView>
    )
}


const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    root: {
        paddingVertical: theme.utils.hp2dp(6),
        paddingHorizontal: theme.utils.wp2dp(4)
    },
    image: {
        width: '100%',
        height: theme.utils.hp2dp(64),
        marginVertical: theme.utils.hp2dp(2)
    }
})