import { fontFamily } from "@/constants/fonts";
import { icon } from "@/constants/icon";
import { PlatformPressable } from "@react-navigation/elements";
import { useEffect } from "react";
import { StyleSheet } from "react-native";

import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function TabBarButton({
  onPress,
  onLongPress,
  routeName,
  color,
  label,
  isFocused,
}: {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  color: string;
  label: React.ReactNode;
}) {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused, { duration: 350 });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    const top = interpolate(scale.value, [0, 1], [0, 9])

    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
      top
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });

  return (
    <PlatformPressable
      android_ripple={{ color: "transparent" }}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItem}
    >
      <Animated.View style={{ alignItems: "center", justifyContent: "center" }}>
        <Animated.View style={animatedIconStyle}>{icon[routeName]({ color })}</Animated.View>

        <Animated.Text style={[{ color, fontFamily: fontFamily.bold, fontSize: 12, marginTop: 5 }, animatedTextStyle]}>
          {label}
        </Animated.Text>
      </Animated.View>
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
