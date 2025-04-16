import React from "react";
import { Text, View } from "react-native";
import TodoLists from "./components/todoList/todo-lists";

const App = () => {
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        flexDirection: "column",
        display: "flex",
        padding: 10,
        marginHorizontal: "auto",
      }}
    >
      <Text>Hi there! well here i am!</Text>
      <TodoLists />
    </View>
  );
};

export default App;
