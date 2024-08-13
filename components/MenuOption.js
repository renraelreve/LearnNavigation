import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MenuOptions() {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonsContainer}>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Explore" onPress={() => navigation.navigate("Explore")} />
      <Button
        title="Hot Deals"
        onPress={() => navigation.navigate("HotDeals")}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

export default MenuOptions;

const styles = StyleSheet.create({
  buttonsContainer: {
    gap: 10,
  },
});
