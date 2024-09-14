import { Image, StyleSheet, Text, View } from "react-native"

import { EColors } from "src/themes/colors"
import { SafeAreaView } from "react-native-safe-area-context"
import { SigninForm } from "src/sections/auth"

export default function Authentication() {
  return (
    <SafeAreaView style={container}>
      <View style={hero}>
        <Image
          source={require("assets/logo.png")}
          style={{
            width: 120,
            aspectRatio: "2/3",
          }}
          resizeMode="contain"
        />
        <View style={hero_titles}>
          <Text style={hero_titles_item}>CREA</Text>
          <Text style={hero_titles_item}>ENTRENA</Text>
          <Text
            style={{
              ...hero_titles_item,
              color: EColors.GREEN_400,
              fontWeight: "600",
            }}
          >
            TRANSFORMA
          </Text>
        </View>
      </View>
      <SigninForm />
    </SafeAreaView>
  )
}

const { container, hero, hero_titles, hero_titles_item } = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  hero: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 16,
  },
  hero_titles: {
    flexDirection: "column",
    transform: [{ translateY: 5 }],
  },
  hero_titles_item: {
    lineHeight: 24,
    fontSize: 22,
  },
})
