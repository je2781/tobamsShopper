import React, { useState, useEffect, useCallback, useRef } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import CartScreen from "./screens/CartScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCoumminityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AccountsScreen from "./screens/AccountsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppColors from "./constants/Colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import { useAppSelector } from "./store/redux/hooks";
import { Provider } from "react-redux";
import store from "./store/redux/index";

const Tab = createBottomTabNavigator();

function Root() {
  //reaching the store to see the position of the detail screen on the stack
  const general = useAppSelector((state) => state.general);
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: AppColors.primary50,
        }}
        screenOptions={{
          headerTintColor: AppColors.primary700,
          tabBarActiveTintColor: AppColors.secondary100,
          tabBarInactiveTintColor: AppColors.primary200,
          headerStyle: {
            backgroundColor: AppColors.primary50,
          },
          headerTitleAlign: "center",
          tabBarStyle: {
            borderTopColor: AppColors.primary100,
            backgroundColor: AppColors.primary50,
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
                color={focused ? AppColors.secondary100 : AppColors.primary200}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Shop"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <MaterialCoumminityIcons
                name="view-grid"
                size={24}
                color={focused ? AppColors.secondary100 : AppColors.primary200}
              />
            ),
            headerShown: false,
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
                color={focused ? AppColors.secondary100 : AppColors.primary200}
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
                color={focused ? AppColors.secondary100 : AppColors.primary200}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function App() {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={AppColors.primary50}
      />
      <Provider store={store}>
        <Root />
      </Provider>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: AppColors.primary50,
  },
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
