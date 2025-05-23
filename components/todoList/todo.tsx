import { Todo as TodoType } from "@/hooks/todoList";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  todo: TodoType;
  onDelete: (id: number) => void;
};

const Todo = ({ todo, onDelete }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{todo.id}</Text>
      <Text>{todo.title}</Text>
      <Link href={`/${todo.id}`} asChild>
        <TouchableOpacity>
          <Text>edit</Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <Text>delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
});

export default Todo;
