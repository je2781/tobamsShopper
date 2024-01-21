import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, { memo, useState } from "react";
import { menuItemProps } from "../../types/types";
import Colors from "../../constants/Colors";
import Button from "../../ui/Button";
import { useAppDispatch, useAppSelector } from "../../store/redux/hooks";
import cartActions from "../../store/redux/cart-slice";
import favoriteActions from "../../store/redux/favorites-slice";

//using memo to prevent reredending of menu item when you scroll through the list
const MenuItem = memo(function MenuItem({
  title,
  imageUri,
  price,
  id,
  info,
  description,
}: menuItemProps) {
  const { width } = useWindowDimensions();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  function pressHandler() {
    //dispatching action to push detail screen onto current stack

    navigation.dispatch(
      StackActions.push("detail", {
        product: { title, price, id, imageUri, description, info }
      })
    );
  }

  function AddToCart() {
    //dispatching action to update cart data in the store

    dispatch(
      cartActions.addItem({
        item: { title, price, id, imageUri, quantity: 1 },
      })
    );
  }

  function toggleFavorites(state: string) {
    //updating local state to re-render UI
    setIsFavorite((prevState) => !prevState);

    switch (state) {
      case "remove":
        //dispatching action to update favorites data
        dispatch(favoriteActions.removeFavorite({ id }));
        break;

      default:
        //dispatching action to update favorites data
        dispatch(favoriteActions.addFavorite({ id }));
        break;
    }
  }

  return (
    <View style={styles.menuItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View style={styles.favoritestyle}>
            {isFavorite ? (
              <MaterialIcons
                name="favorite"
                size={32}
                color={Colors.primary300}
                onPress={toggleFavorites.bind(null, "remove")}
              />
            ) : (
              <MaterialIcons
                name="favorite-border"
                size={32}
                color={Colors.primary300}
                onPress={toggleFavorites.bind(null, "add")}
              />
            )}
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image source={imageUri} style={styles.image} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 2,
              }}
            >
              <Text
                style={[
                  styles.title,
                  width < 560 ? { flexGrow: 1 } : { flexShrink: 1 },
                ]}
              >
                {title}
              </Text>
              <Text
                style={[
                  styles.price,
                  width > 560 ? { flexGrow: 1 } : { flexShrink: 1 },
                ]}
              >{`£${price}`}</Text>
            </View>
            <Button
              hasLeftExternalIcon
              fontSize={16}
              buttonBackgroundColor={Colors.secondary100}
              paddingHorizontal={24}
              color="white"
              paddingVertical={8}
              borderRadius={24}
              onPress={AddToCart}
              leftExternalIcon={
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={32}
                  color="white"
                  style={{ marginRight: 8 }}
                />
              }
            >
              Add To Cart
            </Button>
          </View>
        </View>
      </Pressable>
    </View>
  );
});

export default MenuItem;

const styles = StyleSheet.create({
  menuItem: {
    backgroundColor: "white",
    borderRadius: 12,
    flex: 1,
    margin: 12,
    padding: 10,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  image: { width: "40%", height: 150 },
  favoritestyle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 8,
    marginTop: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    flexWrap: "wrap",
    margin: 8,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 8,
    color: Colors.secondary100,
  },

  innerContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.75,
  },
});
