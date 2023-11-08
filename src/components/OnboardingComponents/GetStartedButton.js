import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

export default function GetStartedButton() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Login")}>
      {/* <Text
        style={{
          color: "whitesmoke",
          paddingHorizontal: 40,
          paddingVertical: 20,
          borderWidth: 2,
          //   borderColor: "#008170",
          borderColor: "rgba(0, 128, 111, 0.64)",
          borderRadius: 40,
          // backgroundColor: "rgba(88, 150, 208, 0.35)",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        Get Started
      </Text> */}
      <View
        style={{
          backgroundColor: "whitesmoke",
          height: 40,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
        }}
      >
        {/* <Text
          style={{
            color: "black",
          }}
        ></Text> */}
        <Icon name="navigate-next" type="material-Icons" />
      </View>
    </Pressable>
  );
}
