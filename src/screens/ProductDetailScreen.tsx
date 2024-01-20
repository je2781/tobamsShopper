import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
  Animated,
  Platform,
  useWindowDimensions,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import React, { memo } from "react";
import { menuItemProps } from "../types/types";
import Colors from "../constants/Colors";
import Card from "../ui/Card";
import Indicator from "../ui/menu/Indicator";
import Backdrop from "../ui/menu/Backdrop";
import Accordion from "../components/Accordion";
import { useAppSelector } from "../store/redux/hooks";
import Button from "../ui/Button";

export default function ProductDetailScreen({
  title,
  imageUri,
  price,
  isFavorite,
  id,
  description,
  route,
  navigation,
}: menuItemProps) {
  const { width, height } = useWindowDimensions();
  //retreiving items in the cart
  const cartIds = useAppSelector((state) => state.cart.cartIds);
  //retrieving selected product
  const selectedProduct = route.params.product;
  const productData = [selectedProduct];
  //dispatching actions to pop the detail screen

  function pressHandler() {
    navigation.replace("menuSL");
  }

  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.innerContainer}>
      <View style={styles.actionButton}>
        <Ionicons
          name="chevron-back"
          size={24}
          color={Colors.primary800}
          onPress={pressHandler}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Backdrop scrollX={scrollX} screenWidth={width} />
          <Animated.FlatList
            data={productData}
            keyExtractor={(item) => item.id!}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={32}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { x: scrollX } },
                },
              ],
              { useNativeDriver: false }
            )}
            contentContainerStyle={{
              paddingHorizontal: 22,
              paddingBottom: 12,
            }}
            key={width > 560 ? "h" : "v"}
            renderItem={({ item }) => {
              return (
                <View style={{ alignItems: "center" }}>
                  <View style={{ width }}>
                    <Card>
                      <Image
                        source={item.imageUri}
                        style={{
                          width: width / 4,
                          height: height < 480 ? height / 2 : height / 4,
                        }}
                      />
                    </Card>
                  </View>
                  <Indicator scrollX={scrollX} productData={productData} />
                </View>
              );
            }}
          />
          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{selectedProduct.title}</Text>
              <Text style={styles.price}>{`£${selectedProduct.price}`}</Text>
            </View>
            <View>
              <Text style={styles.description}>
                {selectedProduct.description}
              </Text>
            </View>
            {Object.keys(selectedProduct.info).map((title, i) => (
              <Accordion
                key={i}
                title={title}
                content={selectedProduct.info[title]}
              />
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={styles.actionButton}>
              <AntDesign
                name="minus"
                size={28}
                color={Colors.primary100}
                onPress={pressHandler}
              />
            </View>
            <Text style={styles.tally}>{cartIds.length}</Text>
            <View style={styles.actionButton}>
              <Ionicons
                name="add"
                size={28}
                color={Colors.primary800}
                onPress={pressHandler}
              />
            </View>
          </View>
          <View style={{ marginHorizontal: 28, marginVertical: 16}}>
            <Button
              fontSize={16}
              buttonBackgroundColor={Colors.secondary100}
              paddingHorizontal={24}
              color="white"
              paddingVertical={8}
              borderRadius={24}
            >
              Add To Cart
            </Button>
            <Button
              fontSize={16}
              isTransparent
              paddingHorizontal={24}
              color={Colors.secondary100}
              paddingVertical={8}
              borderRadius={24}
            >
              Subscribe To A Plan
            </Button>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.primary700,
  },
  description: {
    fontSize: 12,
    marginTop: 8,
    marginBottom: 32,
    color: Colors.primary300,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    marginVertical: 24,
    marginHorizontal: 28,
  },
  tally: {
    color: Colors.primary800,
    fontSize: 16,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.secondary100,
  },
  actionButton: {
    marginHorizontal: 28,
    marginVertical: 16,
    padding: 12,
    borderRadius: 12,
    elevation: 6,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    alignItems: "center",
    maxWidth: "15%",
  },
  innerContainer: {
    flex: 1,
  },
});
