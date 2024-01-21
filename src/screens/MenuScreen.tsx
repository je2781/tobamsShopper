import React, { useState } from "react";
import Input from "../ui/Input";
import Colors from "../constants/Colors";
import { FlatList, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MenuList from "../components/menu/MenuList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "./ProductDetailScreen";
import MenuSearchAndList from "../components/menu/MenuSearchAndList";
import CartScreen from "./CartScreen";


export default function MenuScreen() {
  const [enteredQuery, setEnteredQuery] = useState<string>("");

  function updateInputValueHandler(enteredValue: string) {
    setEnteredQuery(enteredValue);
  }
  return (
    <View style={styles.container}>
      <Input
        onUpdateValue={updateInputValueHandler}
        value={enteredQuery}
        testID="searchbar"
        icon="search"
        placeholder="Search"
        placeholderColor={Colors.primary200}
      />
      <MenuList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 18
  },
});