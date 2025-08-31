import { fontFamily } from "@/constants/fonts";
import { icon } from "@/constants/icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PlatformPressable } from "@react-navigation/elements";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

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
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 0 : 1) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 9]);

    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });

  if (routeName === "find-pet") {
    return (
      <PlatformPressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
          flexDirection: "column",
          gap: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 48,
            height: 48,
            borderRadius: 12,
            backgroundColor: "#673ab7",
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 10,
            shadowOpacity: 0.15,
          }}
        >
          <MaterialCommunityIcons
            name="plus"
            size={24}
            color={"#fff"}
          ></MaterialCommunityIcons>
        </View>

        <Text
          style={[
            { color: "#673ab7", fontFamily: fontFamily.bold, fontSize: 12 },
          ]}
        >
          {label}
        </Text>
      </PlatformPressable>
    );
  }

  return (
    <PlatformPressable
      android_ripple={{ color: "transparent" }}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItem}
    >
      <Animated.View style={{ alignItems: "center", justifyContent: "center" }}>
        <Animated.View style={animatedIconStyle}>
          {icon[routeName]({ color })}
        </Animated.View>

        <Animated.Text
          style={[
            { color, fontFamily: fontFamily.bold, fontSize: 12, marginTop: 5 },
            animatedTextStyle,
          ]}
        >
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
