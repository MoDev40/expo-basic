import { View, Text } from "react-native";
const List = () => {
  const data = Array.from({ length: 100 }).map(
    (_, index) => `Item ${index + 1}`
  );
  return (
    <View>
      {data.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default List;
