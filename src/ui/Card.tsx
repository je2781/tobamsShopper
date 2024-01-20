import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";

interface cardProps {
  children: React.ReactNode;
}

export default function Card({ children }: cardProps) {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[
        styles.inputContainer,
        {
          marginBottom: width < 460 ? 20 : 36,
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 18,
    marginHorizontal: 8,
    padding: 24,
    borderRadius: 8,
    elevation: 6,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    alignItems: "center",
    maxHeight: '90%',
    maxWidth: '85%'
  },
});
