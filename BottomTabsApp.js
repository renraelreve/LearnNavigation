import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ExploreScreen from "./screens/ExploreScreen";
import HotDealsScreen from "./screens/HotDealsScreen";

const BottomTab = createBottomTabNavigator();

function BottomTabsApp() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Explore"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#e8590c",
          },
          headerTintColor: "white",
          tabBarActiveTintColor: "#e8590c",
        }}
      >
        {/* Register our app screens */}
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="HotDeals"
          component={HotDealsScreen}
          options={{
            // title: "Hot Deals!",
            headerTitle: "🔥 Hot Deals!",
            tabBarLabel: "Hot Deals!",
            // headerStyle: {
            //   backgroundColor: "#e8590c",
            // },
            // headerTintColor: "white"
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bonfire-sharp" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabsApp;
