import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackRoutes } from "./StackRoutes";

import { Favorites } from "../screens/Favorites";

import { Ionicons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
        },
      }}
    >
      <Screen
        name="homeTab"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color="#000" size={size} />;
            }

            return <Ionicons name="home-outline" color={color} size={size} />;
          },
        }}
      />
      <Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" color="#ff4141" size={size} />;
            }

            return <Ionicons name="heart-outline" color={color} size={size} />;
          },
        }}
      />
    </Navigator>
  );
}
