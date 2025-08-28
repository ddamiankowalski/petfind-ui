import { fontFamily } from "@/constants/fonts";
import { icon } from "@/constants/icon";
import { PlatformPressable } from "@react-navigation/elements";
import { StyleSheet, Text } from "react-native";

export default function TabBarButton({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
}: {
onPress: () => void;
onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  color: string;
  label: React.ReactNode;
  }) {
  return (
    <PlatformPressable
      android_ripple={{ color: "transparent" }}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItem}
    >
      {icon[routeName]({
        color: isFocused ? "#673ab7" : "#222",
      })}

      <Text style={{ color: isFocused ? "#673ab7" : "#222", fontFamily: fontFamily.bold }}>{label}</Text>
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    fontFamily: 'SpaceMono'
  }
});
