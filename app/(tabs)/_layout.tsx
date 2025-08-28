import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabsLayout() { 
  return (
    <Tabs tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: 'All pets', headerShown: false, animation: 'shift' }}></Tabs.Screen>
      <Tabs.Screen name="find-pet" options={{ title: 'Find pet', headerShown: false, animation: 'shift' }}></Tabs.Screen>
      <Tabs.Screen name="about" options={{ title: 'About', headerShown: false, animation: 'shift' }}></Tabs.Screen>
    </Tabs>
  )
}