import { Feather, Ionicons } from "@expo/vector-icons"
import { Stack, Tabs } from "expo-router"

import { EColors } from "src/themes/colors"

export default function AdminLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 96,
          borderTopWidth: 0,
          shadowOpacity: 0,
          shadowColor: "white",
        },
        tabBarActiveTintColor: EColors.GREEN_400,
        tabBarInactiveTintColor: EColors.GRAY_500,
        tabBarLabelStyle: { fontSize: 12, fontWeight: "medium" },
        tabBarItemStyle: {
          paddingVertical: 16,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={36}
              color={focused ? EColors.GREEN_400 : EColors.GRAY_500}
            />
          ),
        }}
      />
    </Tabs>
  )
}
