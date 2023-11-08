import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function RegisterButton(props) {
  const navigation = useNavigation();
  const loading = props.loading;
  const handleRegister = props.onRegister;
  return (
    <>
      {loading ? (
        <Pressable
          style={{
            height: 45,
            width: "100%",
            backgroundColor: "tomato",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <ActivityIndicator size="large" color="whitesmoke" />
        </Pressable>
      ) : (
        <Pressable
          style={{
            height: 45,
            width: "100%",
            backgroundColor: "tomato",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
          onPress={handleRegister}
        >
          <Text
            style={{ color: "whitesmoke", fontWeight: "500", fontSize: 16 }}
          >
            Register
          </Text>
        </Pressable>
      )}
    </>
  );
}
