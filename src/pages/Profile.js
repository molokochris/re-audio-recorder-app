import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import React from "react";
import RegisterForm from "../components/RegisterComponents/RegisterForm";
import RegisterButton from "../components/RegisterComponents/RegisterButton";
import ProfileSaveButton from "../components/ProfileComponents/ProfileSaveButton";
import ProfileForm from "../components/ProfileComponents/ProfileForm";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(54, 69, 79, 0.95)",
        // backgroundColor: "#28282B",
      }}
    >
      <Pressable
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          backgroundColor: "whitesmoke",
          marginBottom: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/image-placeholder.png")}
          style={{ width: 50, height: 50 }}
        />
      </Pressable>
      <ProfileForm />
      <ProfileSaveButton />
    </View>
  );
}
