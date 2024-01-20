import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import { View } from "react-native";
import { ProductInfo } from "../types/types";
import Chevron from "../ui/Chevron";
import Animated, {
  Extrapolation,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface accordionProps {
  title: string;
  content: string;
}

export default function Accordion({
  title,
  content,
}: accordionProps): JSX.Element {
  const contentRef = useAnimatedRef<Animated.View>();

  //instantiating a shared value to manage the state of the expanded list
  const open = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return open.value ? withTiming(1) : withTiming(0);
  });

  //instantiating a shared value to manage the height of the expanded list
  const heightValue = useSharedValue(0);

  //animating height of content container
  const contentAnimationStyle = useAnimatedStyle(() => ({
    height: interpolate(
      progress.value,
      [0, 1],
      [0, heightValue.value],
      Extrapolation.CLAMP
    ),
  }));
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.titleContainer}
        onPress={() => {
          //checking height of content
          if (heightValue.value === 0) {
            runOnUI(() => {
              'worklet';
              heightValue.value = withTiming(measure(contentRef)!.height);
            })();
          } else {
            heightValue.value = withTiming(0);
          }
          open.value = !open.value;
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Chevron progress={progress} />
      </Pressable>
      <Animated.View style={contentAnimationStyle}>
        <Animated.View style={styles.contentConatiner} ref={contentRef}>
          <Text style={styles.content}>{content}</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary50,
    borderTopColor: Colors.primary100,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  titleContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    color: Colors.primary700,
  },
  contentConatiner: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  content: {
    backgroundColor: Colors.primary50,
    color: Colors.primary300,
  },
});
