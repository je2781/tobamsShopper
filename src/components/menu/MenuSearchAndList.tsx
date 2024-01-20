import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Input from "../../ui/Input";
import Colors from "../../constants/Colors";
import MenuList from "./MenuList";

export default function MenuSearchAndList() {
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
