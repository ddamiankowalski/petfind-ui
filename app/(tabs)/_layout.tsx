import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
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
  )
}