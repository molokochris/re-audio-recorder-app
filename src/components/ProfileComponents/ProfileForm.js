import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import ProfileButton from "./ProfileSaveButton";
import { StyleSheet } from "react-native";

export default function ProfileForm() {
  return (
    <View style={style.formContainer}>
      <TextInput
        style={style.input}
        placeholder="Full names"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="name"
      />
      <TextInput
        style={style.input}
        placeholder="Surname"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="familyName"
      />
      <TextInput
        style={style.input}
        placeholder="Date of Birth"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        keyboardType="number-pad"
      />
      <TextInput
        style={style.input}
        placeholder="Contact numbers"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="telephoneNumber"
        keyboardType="number-pad"
      />
      <TextInput
        style={style.input}
        placeholder="Email address"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="emailAddress"
      />
      {/* <TextInput
        style={style.input}
        placeholder="Password"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="password"
      /> */}
      {/* <TextInput
        style={style.input}
        placeholder="Confirm Password"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="password"
      /> */}
      {/* <Pressable style={{ alignSelf: "flex-end", marginBottom: 15 }}>
        <Text style={{ color: "whitesmoke" }}>have an account? </Text>
      </Pressable> */}
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
