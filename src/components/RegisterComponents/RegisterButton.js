import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function RegisterButton() {
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
      onPress={() => navigation.navigate("Login")}
    >
      <Text style={{ color: "whitesmoke", fontWeight: "500", fontSize: 16 }}>
        Register
      </Text>
    </Pressable>
    // </View>
  );
}
