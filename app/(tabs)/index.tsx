import { Link, useRouter } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";

function App() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/users" asChild>
        <Button title="Navigate to users" />
      </Link>
      <Button
        title="Navigate to profile"
        onPress={() => router.navigate("/profile")}
      />
      <Link href="/blogs">
        <TouchableOpacity>
          <Text>Blogs</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

export default App;
