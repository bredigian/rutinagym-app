import { Text, View } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"

export default function MyAccount() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Mi Cuenta</Text>
    </SafeAreaView>
  )
}
