import { Feather, Ionicons } from "@expo/vector-icons"
import { Stack, Tabs } from "expo-router"

import { EColors } from "src/themes/colors"

export default function ProtectedLayout() {
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
      <Tabs.Screen
        name="rutines/index"
        options={{
          title: "Rutinas",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="calendar"
              size={36}
              color={focused ? EColors.GREEN_400 : EColors.GRAY_500}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my-account/index"
        options={{
          title: "Mi cuenta",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={36}
              color={focused ? EColors.GREEN_400 : EColors.GRAY_500}
            />
          ),
        }}
      />
    </Tabs>
  )
}
