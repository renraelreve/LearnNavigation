import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import HotDealsScreen from "./screens/HotDealsScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Drawer = createDrawerNavigator();

function DrawerApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          // Header background color
          headerStyle: {
            backgroundColor: "#e8590c",
          },
          // Header text color
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#e8590c",
          drawerActiveTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="HotDeals"
          component={HotDealsScreen}
          options={{
            headerTitle: "🔥 Hot Deals!",
            drawerLabel: "Hot Deals!",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="bonfire-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerApp;
