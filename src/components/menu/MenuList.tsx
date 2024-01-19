import React, { memo} from "react";
import { FlatList, useWindowDimensions } from "react-native";
import MenuItem from "./MenuItem";
import { displayedItems } from "../../data/dummy_data";
import { menuItemProps } from "../../types/types";

export default function MenuList() {
  const { width } = useWindowDimensions();

  //destructing dummy data in order to pass it to menu item component
  function renderMenuItem(itemData: any) {
    const item = itemData.item;

    const menuItemProps = {
      imageUri: item.imageUri,
      title: item.title,
      isFavorite: item.isFavorite,
      price: item.price,
      id: item.id,
    };

    return <MenuItem {...menuItemProps} />;
  }

  return (
    <FlatList
      data={displayedItems}
      keyExtractor={(item) => item.id}
      key={width > 560 ? "h" : "v"}
      renderItem={renderMenuItem}
      contentContainerStyle={{
        justifyContent: 'space-between'
      }}
      numColumns={width < 450 ? 1 : width > 560 ? 3 : 2}
    />
  );
}
