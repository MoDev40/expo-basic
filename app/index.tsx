import { Link } from "expo-router";
import { Text, View } from "react-native";

function App() {
  return (
    <View>
      <Text>Hi</Text>
      <Link href="/profile">
        <Text>Go to Profile</Text>
      </Link>
    </View>
  );
}

export default App;
