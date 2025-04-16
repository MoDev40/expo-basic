import { FlatList, Text } from "react-native";
const List = () => {
  const data = Array.from({ length: 100 }).map(
    (_, index) => `Item ${index + 1}`
  );
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => <Text key={index}>{item}</Text>}
    />
  );
};

export default List;
