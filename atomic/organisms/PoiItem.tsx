import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Avatar from '../atoms/Avatar'
import CardA from '../atoms/CardA'
import Typography from '../atoms/Typography'

export default function PoiItem() {
    const theme = useTheme()
    const styles = useStyles(theme)
    return (
        <CardA style={styles.root}>
            <Avatar style={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"/>
            <Typography style={styles.title}>Mona lisa</Typography>
        </CardA>
    )
}

const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    root: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        width: theme.utils.wp2dp(50),
        paddingVertical: theme.utils.hp2dp(5),
        borderTopRightRadius: 32,
        borderBottomRightRadius: 32
    },
    image: {
        position: 'absolute',
        left: -40,
        width: 80,
        height: 80
    },
    title: {
        flex: 1,
        paddingLeft: theme.utils.wp2dp(12)
    }
})