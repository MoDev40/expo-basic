import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="index"
        options={{ title: "Home", headerTintColor: "skyblue" }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
      <Stack.Screen
        name="users/index"
        options={{
          title: "Users",
        }}
      />
      <Stack.Screen
        name="users/[id]/index"
        options={{
          title: "User",
        }}
      />
      <Stack.Screen
        name="blogs/index"
        options={{
          title: "Blogs",
        }}
      /> */}
    </Stack>
  );
};

export default RootLayout;
