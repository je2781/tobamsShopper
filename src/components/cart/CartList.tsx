import React, { memo } from "react";
import { FlatList, Text, useWindowDimensions } from "react-native";
import { displayedItems } from "../../data/dummy_data";
import { CartItem, menuItemProps } from "../../types/types";
import { View } from "react-native";
import { useAppSelector } from "../../store/redux/hooks";
import CartItemComponent from "./CartItem";
import Colors from "../../constants/Colors";

export default function CartList({ cartData }: any) {
  //preparing cart data to pass into cart item component
  function renderCartItem(itemData: any) {
    const item = itemData.item;

    const CartItemProps = {
      imageUri: item.imageUri,
      title: item.title,
      quantity: cartData.quantity,
      price: item.price,
      amount: cartData.totalAmount,
      id: item.id,
    };

    return <CartItemComponent {...CartItemProps} />;
  }

  return (
    <View style={{ flex: 1, marginVertical: 8 }}>
      {cartData.cartItems.length === 0 ? (
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 24}}>
          <Text style={{ color: Colors.primary700, fontSize: 18, position: 'absolute', bottom: -200}}>
            Cart Is Empty!
          </Text>
        </View>
      ) : (
        <FlatList
          data={cartData.cartItems}
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
