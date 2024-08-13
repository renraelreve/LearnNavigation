import { View, Text, StyleSheet } from "react-native";

import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";

function ProductDetailScreen() {
  // can either useRoute or use the route prop
  const route = useRoute();
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Header>ProductDetail</Header>
      <Text>Welcome to the ProductDetail Screen</Text>
      <Text>Here is more info about the {product}</Text>
    </View>
  );
}

export default ProductDetailScreen;

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
