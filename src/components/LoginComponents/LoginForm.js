import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import LoginButton from "./LoginButton";
import { StyleSheet } from "react-native";

export default function LoginForm() {
  return (
    <View style={style.formContainer}>
      <TextInput
        style={style.input}
        placeholder="Login"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="emailAddress"
      />
      <TextInput
        style={style.input}
        placeholder="Password"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="password"
      />
      <Pressable style={{ alignSelf: "flex-end", marginBottom: 15 }}>
        <Text style={{ color: "whitesmoke" }}>forgot password?</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    width: "100%",
  },
  input: {
    width: "100%",
    height: 45,
    paddingHorizontal: 5,
    // paddingVertical: 4,
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    borderColor: "whitesmoke",
    color: "whitesmoke",
  },
});
