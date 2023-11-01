import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function GetStartedButton() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Login")}>
      <Text
        style={{
          color: "whitesmoke",
          paddingHorizontal: 40,
          paddingVertical: 20,
          borderWidth: 2,
          //   borderColor: "#008170",
          borderColor: "rgba(0, 128, 111, 0.64)",
          borderRadius: 40,
          backgroundColor: "rgba(88, 150, 208, 0.35)",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        Get Started
      </Text>
    </Pressable>
  );
}
