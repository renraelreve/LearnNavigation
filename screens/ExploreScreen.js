import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Header>Explore</Header>
      <Text>Welcome to the Explore Screen</Text>
    </View>
  );
}

export default ExploreScreen;

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
