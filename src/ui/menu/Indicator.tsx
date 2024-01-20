import { View } from "react-native";
import { menuItemProps } from "../../types/types";
import AppColors from "../../constants/Colors";
import React from "react";

interface indicatorProps {
  scrollX: any;
  productData: menuItemProps[];
}

export default function Indicator({ scrollX, productData }: indicatorProps) {
  return (
    <View style={{position: 'absolute', bottom: -15}}>
      {productData.map((item, i) => (
        <View
          key={item.id!}
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: AppColors.secondary100,
            margin:  10
          }}
        />
      ))}
    </View>
  );
}
