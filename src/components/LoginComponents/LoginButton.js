import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginButton(props) {
  const loading = props.loading;
  const handleLogin = props.onLogin;
  const navigation = useNavigation();
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
          onPress={handleLogin}
        >
          <Text
            style={{ color: "whitesmoke", fontWeight: "500", fontSize: 16 }}
          >
            Login
          </Text>
        </Pressable>
      )}
    </>
  );
}
