import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabsLayout() { 
  return (
    <Tabs tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: 'All pets' }}></Tabs.Screen>
      <Tabs.Screen name="find-pet" options={{ title: 'Find pet' }}></Tabs.Screen>
      <Tabs.Screen name="find-pet2" options={{ title: 'Find pet2' }}></Tabs.Screen>
    </Tabs>
  )
}