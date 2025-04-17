import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

const UserPage = () => {
  const { id } = useLocalSearchParams();
  return <Text>User Page {id}</Text>;
};

export default UserPage;
