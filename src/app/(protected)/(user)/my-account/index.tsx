import { Alert, Pressable, Text } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"
import { deleteItemAsync } from "expo-secure-store"
import { useAuthStore } from "src/store/auth.store"

export default function MyAccount() {
  const { signout } = useAuthStore()

  const handleSignout = async () => {
    try {
      await deleteItemAsync("session_token")
      signout()
    } catch (error) {
      if (error instanceof Error)
        Alert.alert("Ocurrió un error.", error.message)
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Pressable onPress={handleSignout}>
        <Text>Cerrar sesión</Text>
      </Pressable>
    </SafeAreaView>
  )
}
