import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Slot, useRouter, useSegments } from "expo-router"
import { deleteItemAsync, getItemAsync } from "expo-secure-store"

import { TSignedToken } from "src/types/auth.types"
import { isNetworkError } from "src/utils/messages"
import { useAuthStore } from "src/store/auth.store"
import { useEffect } from "react"
import { useReactQueryDevTools } from "@dev-plugins/react-query"
import { validateToken } from "src/services/auth.service"

const client = new QueryClient()

export default function RootLayout() {
  useReactQueryDevTools(client)
  const segments = useSegments()
  const { replace } = useRouter()
  const { authenticate, isAuthenticated, userdata } = useAuthStore()

  useEffect(() => {
    const inProtectedRoute = segments[0] === "(protected)"

    if (userdata && !inProtectedRoute) replace("/(protected)")
    else if (!userdata) replace("/(auth)")
  }, [isAuthenticated])

  useEffect(() => {
    const validateSession = async () => {
      const token = await getItemAsync("session_token")
      if (!token) return

      try {
        const userdata: TSignedToken = await validateToken(token)
        authenticate(userdata)
      } catch (error) {
        if (error instanceof Error)
          if (!isNetworkError(error.message))
            await deleteItemAsync("session_token")
      }
    }

    validateSession()
  }, [])

  return (
    <QueryClientProvider client={client}>
      <Slot />
    </QueryClientProvider>
  )
}
