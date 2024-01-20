import React, { useState } from "react";
import Input from "../ui/Input";
import Colors from "../constants/Colors";
import { FlatList, StyleSheet, View } from "react-native";
import MenuList from "../components/menu/MenuList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "./ProductDetailScreen";
import MenuSearchAndList from "../components/menu/MenuSearchAndList";

const Stack = createNativeStackNavigator();
//setting up stack navigator to push the detail screen onto the menu screen
export default function MenuScreen() {
  return (
    <Stack.Navigator
    
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.primary50
        },
        headerShown: false
      }}
    >
      <Stack.Screen
        name="menuSL"
        component={MenuSearchAndList}
      />
      <Stack.Screen name="detail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

