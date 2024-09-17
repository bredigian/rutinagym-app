import { Text, TextInput, TouchableOpacity, View } from "react-native"

import { EColors } from "src/themes/colors"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Exercises() {
  return (
    <SafeAreaView style={{ padding: 32, flexDirection: "column", gap: 32 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Ejercicios</Text>
        <TouchableOpacity
          style={{
            backgroundColor: EColors.GREEN_400,
            paddingVertical: 6,
            paddingHorizontal: 24,
            borderRadius: 11,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
            }}
          >
            Agregar
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={{
            backgroundColor: EColors.GRAY_200,
            fontSize: 16,
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 11,
            width: 200,
          }}
          placeholder="Buscar"
        />
        <View
          id="selector"
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 11,
            gap: 16,
            backgroundColor: EColors.GRAY_500,
            width: 130,
            height: 42,
          }}
        >
          <Text
            style={{ fontSize: 16, fontWeight: "semibold", color: "white" }}
          >
            Todos
          </Text>
          <Ionicons name="chevron-down" size={20} color={"white"} />
        </View>
      </View>
    </SafeAreaView>
  )
}
