import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCoumminityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import CartScreen from "../screens/CartScreen";
import AccountsScreen from "../screens/AccountsScreen";

//setting up stack navigator
const Tab = createBottomTabNavigator();

// coverting the tab navigator into a component in order to nest it
export default function TabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: Colors.primary50,
      }}
      screenOptions={{
        headerTintColor: Colors.primary700,
        tabBarActiveTintColor: Colors.secondary100,
        tabBarInactiveTintColor: Colors.primary200,
        headerStyle: {
          backgroundColor: Colors.primary50,
        },
        headerTitleAlign: "center",
        tabBarStyle: {
          borderTopColor: Colors.primary100,
          backgroundColor: Colors.primary50,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          margin: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? Colors.secondary100 : Colors.primary200}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCoumminityIcons
              name="view-grid"
              size={24}
              color={focused ? Colors.secondary100 : Colors.primary200}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={({ navigation: { goBack } }) => ({
          tabBarIcon: ({ focused, color }) => (
            <MaterialCoumminityIcons
              name="shopping-outline"
              size={24}
              color={focused ? Colors.secondary100 : Colors.primary200}
            />
          ),

          headerLeft: () => (
            <View style={styles.actionButton}>
              <Ionicons
                name="chevron-back"
                size={24}
                color={Colors.primary800}
                onPress={() => goBack()}
              />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCoumminityIcons
              name="account"
              size={24}
              color={focused ? Colors.secondary100 : Colors.primary200}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    marginHorizontal: 28,
    marginVertical: 6,
    padding: 12,
    borderRadius: 12,
    elevation: 6,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    alignItems: "center",
    maxWidth: "60%",
  },
});
