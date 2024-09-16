import { Text, View } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"

export default function Rutines() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Rutinas</Text>
    </SafeAreaView>
  )
}
