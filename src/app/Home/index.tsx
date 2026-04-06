import { View, Text, Button } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BaeShop</Text>
      <Text style={styles.subtitle}>
        Your one-stop shop for all things cute and cozy!
      </Text>
      <View style={styles.button}>
        <Button title="Shop Now" onPress={() => alert("Welcome to BaeShop!")} />
      </View>
    </View>
  );
}
