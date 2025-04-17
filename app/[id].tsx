import { useLocalSearchParams, usePathname } from "expo-router";
import { Text, View } from "react-native";

const TodoDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Here</Text>
      <Text>{id}</Text>
    </View>
  );
};

export default TodoDetails;
