import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CartItem } from "../../types/types";
import Colors from "../../constants/Colors";
import { useAppDispatch, useAppSelector } from "../../store/redux/hooks";
import cartActions from "../../store/redux/cart-slice";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function CartItemComponent({
  imageUri,
  title,
  price,
  amount,
  quantity,
  id,
}: CartItem) {
  //defining local state to determine how many items that will be added to the cart
  const [tally, setTally] = useState<number>(1);
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state) => state.cart);

  function checkOut() {}

  function UpdateCart(mode: string, itemQuantity: number) {
    //dispatching action to update cart data in the store
    switch (mode) {
      case "add":
        dispatch(
          cartActions.addItem({
            item: {
              title,
              price,
              id,
              imageUri,
              amount: tally * price!,
              quantity: tally,
            },
            quantity: itemQuantity
          })
        );
        break;

      default:
        dispatch(
          cartActions.removeItem({
            id: id,
            item: {
              title,
              price,
              id,
              imageUri,
              amount: tally * price!,
              quantity: tally,
            },
            quantity: itemQuantity

          })
        );

        break;
    }
  }

  function updateTally(mode: string) {
    if (mode === "minus" && tally > 0) {
      setTally((prevTally) => prevTally - 1);
      UpdateCart(mode, tally);
    } else if (mode === "add" && tally > 0) {
      setTally((prevTally) => prevTally + 1);
      UpdateCart(mode, tally);
    }
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16,
      }}
    >
      <View style={{ flexDirection: "row", flexShrink: 1, gap: 12 }}>
        <Image source={imageUri} style={styles.image} />
        <View style={{ gap: 26, flexGrow: 1 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{`£${price}`}</Text>
          <Ionicons name="trash" size={28} color={Colors.primary300} />
        </View>
      </View>
      <View style={{ gap: 12, alignItems: "center" }}>
        <View style={styles.actionButton}>
          <AntDesign
            name="minus"
            size={28}
            color={Colors.primary100}
            onPress={updateTally.bind(null, "minus")}
          />
        </View>
        <Text style={styles.tally}>{tally}</Text>
        <View style={styles.actionButton}>
          <Ionicons
            name="add"
            size={28}
            color={Colors.primary800}
            onPress={updateTally.bind(null, "add")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: "35%", height: 150 },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    flexWrap: "wrap",
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.secondary100,
  },
  tally: {
    color: Colors.primary800,
    fontSize: 16,
  },
  actionButton: {
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 12,
    elevation: 6,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    alignItems: "center",
    width: "80%",
  },
});
