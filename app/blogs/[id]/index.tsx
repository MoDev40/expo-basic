import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Blog = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Blog {id}</Text>
    </View>
  );
};

export default Blog;
