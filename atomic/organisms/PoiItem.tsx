import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Avatar from '../atoms/Avatar'
import CardA from '../atoms/CardA'
import Typography from '../atoms/Typography'


type PoiItemProps = {
    img: string,
    name: string
}


export default function PoiItem({img, name}: PoiItemProps) {
    const theme = useTheme()
    const styles = useStyles(theme)
    return (
        <CardA style={styles.root}>
            <Avatar style={styles.image} src={img}/>
            <Typography style={styles.name}>{name}</Typography>
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
        borderBottomRightRadius: 32,
        marginVertical: theme.utils.hp2dp(1)
    },
    image: {
        position: 'absolute',
        left: -40,
        width: 80,
        height: 80
    },
    name: {
        flex: 1,
        paddingLeft: theme.utils.wp2dp(12),
        fontSize: theme.utils.wp2dp(4)
    }
})