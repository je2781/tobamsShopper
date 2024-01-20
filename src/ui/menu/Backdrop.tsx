import { Animated, StyleSheet } from "react-native";
import React from 'react';
import Colors from "../../constants/Colors";

interface backdropProps {
    scrollX: any;
    screenWidth: number
  }

export default function Backdrop({scrollX, screenWidth}: backdropProps){
  //stating the background color for each slide
  const bgs = [Colors.primary50, Colors.primary50, Colors.primary50];

  const bg = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * screenWidth),
    outputRange: bgs.map((bg) => bg)
  });
    return <Animated.View  style={{backgroundColor: bg}}/>

}