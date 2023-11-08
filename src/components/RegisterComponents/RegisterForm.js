import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import RegisterButton from "./RegisterButton";
import { StyleSheet } from "react-native";
import { FirebaseAuth } from "../../Auth/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const auth = FirebaseAuth;

  const onRegister = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Success!! ");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
      alert("Failed!! " + error.message);
    } finally {
      setLoading(false);
    }
  };
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
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={style.input}
        placeholder="Password"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={style.input}
        placeholder="Confirm Password"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="password"
      />
      <RegisterButton onRegister={onRegister} loading={loading} />
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
