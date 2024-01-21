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
import TabNavigator from "./components/TabNavigator";

//setting up stack navigator to nest the bottom tab
const Stack = createNativeStackNavigator();

function Root() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: Colors.primary50,
          },
        }}
      >
        <Stack.Screen
        component={TabNavigator}
          name="HomeScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="detail"
          component={ProductDetailScreen}
          options={{
            headerShown: false,
          }}
        />
        
      </Stack.Navigator>
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
  }
});
