import {
  View,
  Text,
  TextInput,
  Pressable,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import LoginButton from "../components/LoginComponents/LoginButton";
import LoginForm from "../components/LoginComponents/LoginForm";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{
        flex: 1,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
      source={require("../../assets/login-screen.jpg")}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Image
        style={{
          width: "50%",
          // backgroundColor: "yellow",
          alignSelf: "center",
          height: 50,
          marginBottom: 50,
        }}
        source={{
          uri: "https://media.giphy.com/media/yFKokXsr5Bc6xVqpTt/giphy.gif",
        }}
      />

      <LoginForm />
      {/* <LoginButton /> */}
      <View style={{ marginTop: 15, flexDirection: "row" }}>
        <Text style={{ color: "whitesmoke" }}>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "tomato" }}>Create account</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
