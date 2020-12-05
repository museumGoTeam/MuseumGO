import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { onFinish } from '../../store/reducer'
import { IAppState } from '../../store/types'
import Button from '../atoms/Button'
import Typography from '../atoms/Typography'

export default function PoiDetailsP() {
    const theme = useTheme()
    const styles = useStyles(theme)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const poi = useSelector((state: IAppState) => state.poiSelected)

    const onGoBack = () => {
        dispatch(onFinish())
        navigation.navigate("RoomScan")
    }

    
    return (
        <ScrollView  contentContainerStyle={styles.root}>
            <Typography align="center" variant="h4">{poi?.name}</Typography>
            <Image source={{uri: poi?.image}} style={styles.image} />
            <Typography align="justify">{poi?.description}</Typography>
            <View style={styles.buttonContainer}>
                <Button label="Back to the start" onPress={onGoBack}  labelStyle={styles.labelButton} />
            </View>
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
    },
    buttonContainer: {
        alignItems:"center",
        justifyContent: "center"
    },
    labelButton: {
        color: "white"
    }
})