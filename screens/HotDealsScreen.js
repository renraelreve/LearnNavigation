import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../components/Header";

function HotDealsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header>HotDeals</Header>
      <Text>Welcome to the HotDeals Screen</Text>
      <Text>Product: Apple iPad</Text>
      <Button
        title="More Info"
        // navigation.navigate(screenName, params)
        onPress={() =>
          navigation.navigate("ProductDetail", {
            product: "Apple iPad",
            id: 123,
          })
        }
      />
      <Text>Product: Apple iPhone</Text>
      <Button
        title="More Info"
        onPress={() =>
          navigation.navigate("ProductDetail", {
            product: "Apple iPhone",
            id: 124,
          })
        }
      />
      <Text>Product: Apple Watch</Text>
      <Button
        title="More Info"
        onPress={() =>
          navigation.navigate("ProductDetail", {
            product: "Apple Watch",
            id: 125,
          })
        }
      />
    </View>
  );
}

export default HotDealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
