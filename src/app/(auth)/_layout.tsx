import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Stack } from "expo-router"

const client = new QueryClient()

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signup/index" />
    </Stack>
  )
}
