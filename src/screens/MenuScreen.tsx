import React, { useState } from "react";
import Input from "../ui/Input";
import Colors from "../constants/Colors";
import { FlatList, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MenuList from "../components/menu/MenuList";
import { SafeAreaView } from "react-native-safe-area-context";


export default function MenuScreen() {
  const [enteredQuery, setEnteredQuery] = useState<string>("");

  function updateInputValueHandler(enteredValue: string) {
    setEnteredQuery(enteredValue);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Input
        onUpdateValue={updateInputValueHandler}
        value={enteredQuery}
        testID="searchbar"
        icon="search"
        placeholder="Search"
        placeholderColor={Colors.primary200}
      />
      <MenuList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 18
  },
});