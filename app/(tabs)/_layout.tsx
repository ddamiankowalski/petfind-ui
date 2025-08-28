import TabBar from "@/components/TabBar";
import { fontFamily } from "@/constants/fonts";
import { Tabs, usePathname } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  // Map pathname to a human-readable title
  const routeTitleMap: Record<string, string> = {
    "/": "All pets",
    "/find-pet": "Find pet",
    "/about": "About",
  };

  const title = routeTitleMap[pathname] || "";
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      {title.length && <Text style={{ fontFamily: fontFamily.bold, fontSize: 24 }}>{title}</Text>}

    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: 'All pets', animation: 'fade' }} />
      <Tabs.Screen name="find-pet" options={{ title: 'Find pet', animation: 'fade' }} />
      <Tabs.Screen name="about" options={{ title: 'About', animation: 'fade' }} />
      </Tabs>
      </View>
  )
}