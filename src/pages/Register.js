import { View, Text, ImageBackground, StatusBar, Image } from "react-native";
import React from "react";
import RegisterForm from "../components/RegisterComponents/RegisterForm";
import RegisterButton from "../components/RegisterComponents/RegisterButton";

export default function Register() {
  return (
    <ImageBackground
      source={require("../../assets/login-screen.jpg")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
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
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <RegisterForm />
      <RegisterButton />
    </ImageBackground>
  );
}
