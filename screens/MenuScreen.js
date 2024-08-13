import { Button, StyleSheet, View } from "react-native";
import Header from "../components/Header";

// navigation prop is passed in by React Navigation to registered screens
function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header>Menu</Header>
      <View style={styles.buttonsContainer}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button
          title="Explore"
          onPress={() => navigation.navigate("Explore")}
        />
        <Button
          title="Hot Deals"
          onPress={() => navigation.navigate("HotDeals")}
        />
        <Button
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    gap: 10,
  },
});
