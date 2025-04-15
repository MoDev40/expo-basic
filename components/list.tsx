import { View, Text, StyleSheet, ScrollView } from "react-native";
const List = () => {
  const data = Array.from({ length: 100 }).map(
    (_, index) => `Item ${index + 1}`
  );
  return (
    <ScrollView>
      <View style={style.container}>
        {data.map((item, index) => (
          <Text style={style.item} key={index}>
            {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  item: {
    backgroundColor: "skyblue",
    marginTop: 10,
    padding: 10,
    borderRadius: 12,
  },
});

export default List;
