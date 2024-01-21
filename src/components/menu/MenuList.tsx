import React, { memo } from "react";
import { FlatList, useWindowDimensions } from "react-native";
import MenuItem from "./MenuItem";
import { displayedItems } from "../../data/dummy_data";
import { menuItemProps } from "../../types/types";
import { View } from "react-native";

export default function MenuList() {
  const { width } = useWindowDimensions();

  //destructing dummy data in order to pass it to menu item component
  function renderMenuItem(itemData: any) {
    const item = itemData.item;

    const menuItemProps = {
      imageUri: item.imageUri,
      title: item.title,
      description: item.description,
      price: item.price,
      info: item.info,
      id: item.id,
    };

    return <MenuItem {...menuItemProps} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={displayedItems}
        keyExtractor={(item) => item.id}
        key={width > 560 ? "h" : "v"}
        renderItem={renderMenuItem}
        contentContainerStyle={{
          justifyContent: "space-between",
        }}
        numColumns={width < 450 ? 1 : width > 560 ? 3 : 2}
      />
    </View>
  );
}
