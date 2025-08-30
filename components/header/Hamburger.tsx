import React from "react";
import { View, StyleSheet, ViewStyle, Pressable } from "react-native";
import Animated, {
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Hamburger() {
  const open = useSharedValue(0);
  const thickness = 3;
  const barSpacing = 7.5;

  const rotation = useDerivedValue(() => {
    return interpolate(open.value, [0, 1], [0, 45]);
  });

  const middleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(open.value, [1, 0], [0, 1]);

    return {
      opacity,
    };
  });

  const topStyle = useAnimatedStyle(() => {
    return {
      transform: [
      { translateY: barSpacing * open.value },
      { rotate: `${rotation.value}deg` },
      ],
    };
  });

  const bottomStyle = useAnimatedStyle(() => {
    return {
      transform: [
      { translateY: -barSpacing * open.value },
      { rotate: `${-rotation.value}deg` },
      ],
    };
  });

  const color = "#222";

  const barStyle: ViewStyle = {
    backgroundColor: color,
    height: thickness,
    borderRadius: thickness,
    width: "100%",
  };

  const onPress = () => {
    cancelAnimation(open);
    open.value = withSpring(open.value === 0 ? 1 : 0, { duration: 250 });
  };

  return (
    <Pressable onPress={onPress} style={[styles.wrapper, { width: 24, height: 24 }]}>
      <View style={styles.stack}>
        <Animated.View style={[barStyle, topStyle]} />
        <Animated.View style={[barStyle, middleStyle]} />
        <Animated.View style={[barStyle, bottomStyle]} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  stack: {
    width: "100%",
    height: "75%",
    justifyContent: "space-between",
  },
});
