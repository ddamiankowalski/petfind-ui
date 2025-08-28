import { Tabs } from "expo-router";

export default function TabsLayout() { 
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'All pets' }}></Tabs.Screen>
      <Tabs.Screen name="find-pet" options={{ title: 'Find pet' }}></Tabs.Screen>
    </Tabs>
  )
}