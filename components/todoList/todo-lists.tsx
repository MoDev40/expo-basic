import useTodoList from "@/hooks/todoList";
import { FlatList, View } from "react-native";
import Todo from "./todo";
import TodoForm from "./todo-form";

const TodoLists = () => {
  const { todoLists, addTodo, updateTodo, deleteTodo } = useTodoList();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        display: "flex",
        marginVertical: 14,
      }}
    >
      <TodoForm onAdd={addTodo} />
      <FlatList
        ListEmptyComponent={() => "Empty todo"}
        style={{ marginVertical: 14 }}
        data={todoLists}
        renderItem={({ item, index }) => (
          <Todo key={index} todo={item} onDelete={deleteTodo} />
        )}
      />
    </View>
  );
};

export default TodoLists;
