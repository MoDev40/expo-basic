import { Button, Text, TouchableOpacity, View } from "react-native";

const Buttons = () => {
  return (
    <View>
      <Button title="subscribe" onPress={() => console.log("🔔")} />
      <TouchableOpacity onPress={() => console.log("🔕")}>
        <Text>Unsubscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
