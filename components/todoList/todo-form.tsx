import { useRef, useState } from "react";
import { Button, TextInput, View } from "react-native";

type Props = {
  onAdd: (title: string) => void;
};

const TodoForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const ref = useRef<TextInput>(null);

  function handleSubmit() {
    if (title.trim()) {
      onAdd(title);
      ref.current?.clear();
      setTitle("");
    } else {
      ref.current?.focus();
    }
  }
  return (
    <View>
      <TextInput
        style={{
          borderWidth: 3,
          borderColor: "#dddd",
          borderStyle: "solid",
          borderRadius: 4,
          padding: 4,
          marginVertical: 5,
        }}
        ref={ref}
        placeholder="Title"
        id="title"
        keyboardType="ascii-capable"
        onChange={(e) => setTitle(e.nativeEvent.text)}
      />
      <Button title="save" onPress={handleSubmit} />
    </View>
  );
};

export default TodoForm;
