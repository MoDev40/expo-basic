import { useEffect, useState } from "react";

const dummyData = [
  { id: 1, title: "Creating a landing page", isDone: false },
  { id: 2, title: "Configuring CI/CD pipeline", isDone: false },
];

export type Todos = typeof dummyData;
export type Todo = (typeof dummyData)[0];

const useTodoList = () => {
  const [todoLists, setTodoLists] = useState<Todos>(dummyData);

  const addTodo = (title: string) => {
    const data: Todo = { id: todoLists.length + 1, title, isDone: false };
    setTodoLists([...todoLists, data]);
  };
  const updateTodo = (id: number, title: string) => {};
  const deleteTodo = (id: number) => {
    const latest = todoLists.filter((todo) => todo.id !== id);
    setTodoLists(latest);
  };

  return {
    todoLists,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodoList;
