import React, { PropsWithChildren, Suspense } from "react";
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";

type SkeletonProps = {
  variant: "text" | "rect" | "circle";
  width?: number;
  height?: number;
  fullwidth?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function Skeleton({
  variant,
  width,
  height,
  fullwidth,
  style,
  children,
}: PropsWithChildren<SkeletonProps>) {
  const theme = useTheme();
  const styles = useStyles(theme, fullwidth, width, height);
  const anim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: 0.4,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(anim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [anim]);

  if (variant === "text")
    return (
      <Animated.View
        style={[styles.root, styles.text, style, { opacity: anim }]}
      >
        {children}
      </Animated.View>
    );
  else if (variant === "circle")
    return (
      <Animated.View
        style={[styles.root, styles.circle, style, { opacity: anim }]}
      >
        {children}
      </Animated.View>
    );
  else if (variant === "rect")
    return (
      <Animated.View
        style={[styles.root, styles.rect, style, { opacity: anim }]}
      >
        {children}
      </Animated.View>
    );

  return <View />;
}

const useStyles = (
  theme: ReactNativePaper.Theme,
  fullwidth: boolean | undefined,
  width: number | undefined,
  height: number | undefined
) =>
  StyleSheet.create({
    root: {
      backgroundColor: "rgba(0, 0, 0, 0.11)",
    },
    text: {
      width: fullwidth ? theme.utils.wp2dp(100) : width ? width : 128,
      height: height ? height : theme.utils.hp2dp(2),
      borderRadius: theme.utils.wp2dp(1.5),
    },
    circle: {
      width: width ? width : 64,
      height: height ? height : 64,
      borderRadius: theme.utils.makeCircle(),
    },
    rect: {
      width: width ? width : theme.utils.wp2dp(64),
      height: height ? height : theme.utils.hp2dp(16),
    },
  });
