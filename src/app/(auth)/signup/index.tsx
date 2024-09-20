import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"

import Ionicons from "@expo/vector-icons/Ionicons"
import { SafeAreaView } from "react-native-safe-area-context"
import { SignupForm } from "src/sections/auth"
import { useRouter } from "expo-router"

export default function Signup() {
  const { back } = useRouter()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.hero}>
          <Pressable onPress={back}>
            <Ionicons name="arrow-back-outline" size={24} color={"black"} />
          </Pressable>
          <Text style={styles.title}>Crear cuenta</Text>
        </View>
        <SignupForm />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  hero: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingHorizontal: 32,
  },
  titles_container: {
    flexDirection: "column",
    gap: 12,
  },
  title: {
    fontSize: 20,
  },
})
