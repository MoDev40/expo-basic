import { useState } from "react";
import { Button, TextInput, View } from "react-native";

const Forms = () => {
  const [username, setUsername] = useState("");
  return (
    <View>
      <TextInput
        placeholder="name"
        id="name"
        keyboardType="ascii-capable"
        textContentType="username"
        onChange={(e) => setUsername(e.nativeEvent.text)}
      />
      <Button
        title="save"
        onPress={() =>
          console.log(username.trim() ? username : "username is not available")
        }
      />
    </View>
  );
};

export default Forms;
