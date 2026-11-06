import { Stack } from "expo-router";
import "../../global.css";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index" options={{ title: "login", headerShown: false }} />
    <Stack.Screen name="register" options={{ title: "register", headerShown: false }} />
    <Stack.Screen name="home" options={{ title: "home", headerShown: false }} />
  </Stack>
  )
}
