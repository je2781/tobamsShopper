import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CartList from "../components/cart/CartList";
import Colors from "../constants/Colors";
import { StackActions } from "@react-navigation/native";
import Button from "../ui/Button";
import { useAppSelector } from "../store/redux/hooks";

export default function CartScreen() {
  //retrieving cart data from the store
  const cartData = useAppSelector((state) => state.cart);
  return (
    <View style={styles.container}>
      <CartList cartData={cartData} />
      <View style={{ marginHorizontal: 8, marginVertical: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 6 }}>
          <Text style={{ color: Colors.primary700, fontSize: 16 }}>
            <Text style={{ color: Colors.primary700, fontSize: 16 }}>
              Total
            </Text>
            {` (${cartData.cartItems.length} items)`}
          </Text>
          <Text
            style={{ color: Colors.primary700, fontSize: 16 }}
          >{`£${cartData.totalAmount}`}</Text>
        </View>
        <Button
          fontSize={16}
          buttonBackgroundColor={Colors.secondary100}
          paddingHorizontal={24}
          color="white"
          paddingVertical={8}
          borderRadius={24}
        >
          {`Checkout - £${cartData.totalAmount}`}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 28,
  },
});
