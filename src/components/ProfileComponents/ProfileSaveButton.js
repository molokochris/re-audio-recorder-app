import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ProfileSaveButton() {
  const [isEdit, setIsEdit] = useState(false);
  const navigation = useNavigation();
  return (
    // <View>
    <Pressable
      style={{
        height: 45,
        width: "100%",
        backgroundColor: isEdit ? "tomato" : "#BCD0C7",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 40,
        borderRadius: 8,
      }}
      onPress={() => setIsEdit(!isEdit)}
    >
      <Text style={{ color: "whitesmoke", fontWeight: "500", fontSize: 16 }}>
        {isEdit ? "Save" : "Edit"}
      </Text>
    </Pressable>
    // </View>
  );
}
