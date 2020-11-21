import React from 'react'
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'
import Typography from './Typography'

type ButtonProps = {
    label: string,
    color?: "primary" | "secondary"
    onPress: () => void
    style?: StyleProp<ViewStyle>
    labelStyle?: StyleProp<TextStyle>
}

const Button: React.FC<ButtonProps> = ({ label, color = "primary", onPress, style,labelStyle }) => {
    const theme = useTheme()
    const styles = useStyles(theme, color)
    return (
    <TouchableOpacity onPress={onPress} style={[styles.root, style]}>
        <Typography style={labelStyle}>{label}</Typography>
    </TouchableOpacity>
    )
}

const useStyles = (theme: ReactNativePaper.Theme, color: "primary" | "secondary") => StyleSheet.create({
    root: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color === "primary" ? theme.colors.primary : theme.colors.secondary,
        paddingHorizontal: theme.utils.wp2dp(6),
        paddingVertical: theme.utils.hp2dp(1.5),
        borderRadius: theme.utils.wp2dp(4),
        height: theme.utils.hp2dp(7)
    },
    label: {
        color: "white",
        fontWeight: "bold",
        fontSize: theme.utils.hp2dp(1.5)
    }
})

export default Button
