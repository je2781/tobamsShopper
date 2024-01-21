import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CartList from "../components/cart/CartList";
import Colors from "../constants/Colors";
import { StackActions } from "@react-navigation/native";
import Button from "../ui/Button";
import { useAppSelector } from "../store/redux/hooks";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartItem } from "../types/types";

export default function CartScreen({route}: any) {

  //retrieving cart data from the store
  const cartData = useAppSelector((state) => state.cart);
  return (
    <SafeAreaView style={styles.container}>
      <CartList cartItems={cartData.cartItems} />
      <View style={{ marginHorizontal: 8, marginVertical: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 6,
          }}
        >
          <Text style={{ color: Colors.primary700, fontSize: 16 }}>
            <Text style={{ color: Colors.primary700, fontSize: 16 }}>
              Total
            </Text>
            {` (${cartData.cartItems.length} items)`}
          </Text>
          <Text style={{ color: Colors.primary700, fontSize: 16 }}>{`£${
            cartData.totalAmount > 0 ? cartData.totalAmount : 0
          }`}</Text>
        </View>
        <Button
          fontSize={16}
          buttonBackgroundColor={Colors.secondary100}
          paddingHorizontal={24}
          color="white"
          paddingVertical={8}
          borderRadius={24}
        >
          {`Checkout - £${cartData.totalAmount > 0 ? cartData.totalAmount : 0}`}
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 28,
  },
});
