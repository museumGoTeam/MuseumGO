import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Typography from './Typography'

type ButtonProps = {
    label: string,
    onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
    const theme = useTheme()
    const styles = useStyles(theme)
    return (
        <View style={styles.root}>
            <Pressable onPress={onPress}>
                <Typography style={styles.label}>{label}</Typography>
            </Pressable>
        </View>
    )
}

const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    root: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.primary,
        paddingHorizontal: theme.utils.wp2dp(6),
        paddingVertical: theme.utils.hp2dp(2),
        borderRadius: theme.utils.wp2dp(4),
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 7,
    },
    label: {
        color: "white",
        fontWeight: "bold",
        fontSize: theme.utils.hp2dp(3)
    }
})

export default Button
