import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CartItem } from "../../types/types";
import Colors from "../../constants/Colors";
import { useAppDispatch } from "../../store/redux/hooks";
import cartActions from "../../store/redux/cart-slice";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function CartItemComponent({
  imageUri,
  title,
  price,
  amount,
  id,
}: CartItem) {
  //defining local state to determine how many items that will be added to the cart
  const [tally, setTally] = useState<number>(0);
  const dispatch = useAppDispatch();

  function checkOut() {}

  function UpdateCart(mode: string) {
    //dispatching action to update cart data in the store
    switch (mode) {
      case "add":
        if (tally > 1) {
          for (let i = 0; i < tally; i++) {
            dispatch(
              cartActions.addItem({
                item: { title, price, id, imageUri },
              })
            );
          }
        } else {
          dispatch(
            cartActions.addItem({
              item: { title, price, id, imageUri },
            })
          );
        }
        break;

      default:
        if (tally > 1) {
          for (let i = 0; i < tally; i++) {
            dispatch(
              cartActions.removeItem({
                id: id,
                item: { title, price, id, imageUri },
              })
            );
          }
        } else {
          dispatch(
            dispatch(
              cartActions.removeItem({
                id: id,
                item: { title, price, id, imageUri },
              })
            )
          );
        }
        break;
    }
  }

  function updateTally(mode: string) {
    if (mode === "add") {
      setTally((prevTally) => prevTally + 1);
    } else {
      setTally((prevTally) => prevTally - 1);
    }

    UpdateCart(mode);
  }
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", flexShrink: 1, gap: 16 }}>
        <Image source={imageUri} style={styles.image} />
        <View style={{ gap: 26 }}>
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
  image: { width: "30%", height: 140 },
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
