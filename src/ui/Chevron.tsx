import { View, Text } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import Feather from "react-native-vector-icons/Feather";
import Animated, {
    SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  progress: Readonly<SharedValue<0 | 1>>;
};

const Chevron = ({ progress }: Props) => {
  //creating animation for the chevron
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${progress.value * -180}deg`}],
  }));
  return (
    <Animated.View style={iconStyle}>
      <Feather name="chevron-down" size={24} color={Colors.primary900} />
    </Animated.View>
  );
};

export default Chevron;
