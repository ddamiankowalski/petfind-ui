import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { Nunito } from "@/constants/fonts";

preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts(Nunito);

  useEffect(() => {
    if (loaded) {
      hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
