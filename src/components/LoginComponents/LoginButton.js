import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginButton() {
  const navigation = useNavigation();
  return (
    // <View>
    <Pressable
      style={{
        height: 45,
        width: "100%",
        backgroundColor: "tomato",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 40,
        borderRadius: 8,
      }}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={{ color: "whitesmoke", fontWeight: "500", fontSize: 16 }}>
        Login
      </Text>
    </Pressable>
    // </View>
  );
}
