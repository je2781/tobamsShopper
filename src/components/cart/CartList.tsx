import React, { memo } from "react";
import { FlatList, Text, useWindowDimensions } from "react-native";
import { displayedItems } from "../../data/dummy_data";
import { CartItem, initialStateProps, menuItemProps } from "../../types/types";
import { View } from "react-native";
import { useAppSelector } from "../../store/redux/hooks";
import CartItemComponent from "./CartItem";
import Colors from "../../constants/Colors";

interface cartListProps{
    cartItems: CartItem[],
}

export default function CartList({cartItems }: cartListProps) {
  //preparing cart data to pass into cart item component
  function renderCartItem(itemData: any) {
    const item = itemData.item;

    const CartItemProps = {
      imageUri: item.imageUri,
      title: item.title,
      price: item.price,
      amount: item.amount,
      quantity: item.quantity,
      id: item.id,
    };

    return <CartItemComponent {...CartItemProps} key={item.id}/>;
  }

  return (
    <View style={{ flex: 1, marginVertical: 8 }}>
      {cartItems.length === 0 ? (
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 24}}>
          <Text style={{ color: Colors.primary700, fontSize: 18, position: 'absolute', bottom: -200}}>
            Cart Is Empty!
          </Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
          contentContainerStyle={{
            paddingVertical: 8,
            marginVertical: 16,
          }}
        />
      )}
    </View>
  );
}
