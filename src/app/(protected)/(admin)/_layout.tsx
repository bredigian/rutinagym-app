import { Feather, Ionicons } from "@expo/vector-icons"
import { Stack, Tabs } from "expo-router"

import { EColors } from "src/themes/colors"
import ExercisesIcon from "src/components/icons/exercises-icon"
import MuscleGroupsIcon from "src/components/icons/muscle-groups-icon"

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
      <Tabs.Screen
        name="exercises/index"
        options={{
          title: "Ejercicios",
          tabBarIcon: ({ focused }) => (
            <ExercisesIcon
              size={48}
              color={focused ? EColors.GREEN_400 : EColors.GRAY_500}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="muscles-groups/index"
        options={{
          title: "Grupos mus.",
          tabBarIcon: ({ focused }) => (
            <MuscleGroupsIcon
              size={36}
              color={focused ? EColors.GREEN_400 : EColors.GRAY_500}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="admin/index"
        options={{
          title: "Admin",
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
