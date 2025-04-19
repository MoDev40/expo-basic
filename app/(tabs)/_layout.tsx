import { Tabs } from "expo-router";
import React from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import { Platform } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: "skyblue",
        tabBarInactiveBackgroundColor: "#ddd",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="blogs/index"
        options={{
          title: "Blogs",
          headerTitleAlign:
            Platform.OS === "web" || Platform.OS === "macos"
              ? "left"
              : "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper-o" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="users/index"
        options={{
          title: "Subscribers",
          headerTitleAlign:
            Platform.OS === "web" || Platform.OS === "macos"
              ? "left"
              : "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="credit-card" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitleAlign:
            Platform.OS === "web" || Platform.OS === "macos"
              ? "left"
              : "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
