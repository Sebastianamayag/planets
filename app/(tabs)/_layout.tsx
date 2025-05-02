import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.dark.background,
        },
        tabBarStyle: {
          backgroundColor: Colors.dark.background,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="fav"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "favorite" : "favorite-border"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
