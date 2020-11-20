import React from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet} from 'react-native'
import { useTheme } from 'react-native-paper'


type AvatarProps = {
    src: string
    style?: StyleProp<ImageStyle>
}

export default function Avatar({src, style}: AvatarProps) {
    const theme = useTheme()
    const styles = useStyles(theme)

    return (
        <Image style={[styles.root, style]} source={{uri: src}} />   
    )
}


const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    root: {
        width: 64,
        height: 64,
        borderRadius: theme.utils.makeCircle()
    }
})