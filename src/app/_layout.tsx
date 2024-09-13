import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Stack } from "expo-router"
import { useReactQueryDevTools } from "@dev-plugins/react-query"

const client = new QueryClient()

export default function RootLayout() {
  useReactQueryDevTools(client)

  return (
    <QueryClientProvider client={client}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="signup/index" />
      </Stack>
    </QueryClientProvider>
  )
}
