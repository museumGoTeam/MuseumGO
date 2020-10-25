import React from 'react'
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native'
import { useTheme } from 'react-native-paper'
import { AlignTextType, TypographyType, TypographyWeight, } from '../../theme/type'


type TypographyProps = {
    style?: StyleProp<TextStyle>
    variant?: TypographyType
    fontWeight?: TypographyWeight
    align?: AlignTextType


}

const Typography: React.FC<TypographyProps> = ({variant = "body",fontWeight = "normal",align, style, children}) => {
    const theme = useTheme()
    const styles = useStyles(theme, variant, fontWeight, align)
    return (
        <Text style={[styles.root, style]}>{children}</Text>
    )
}

const useStyles = (theme: ReactNativePaper.Theme, variant: TypographyType, fontWeight: TypographyWeight, align: AlignTextType) => StyleSheet.create({
    root: {
        fontSize: theme.typography[variant],
        fontWeight: fontWeight,
        textAlign: align,
        fontFamily: "Roboto",
    }
})

export default Typography
