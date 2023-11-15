import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ProfileSaveButton({ editable, setEditable }) {
  const [isEdit, setIsEdit] = useState(false);
  const navigation = useNavigation();

  function handleBtnPress() {
    if (editable) {
      console.log("editable is ", editable);
      setEditable(!editable);
      console.log("data saved, editable is now", editable);
    } else {
      console.log("editable is ", editable);
      setEditable(!editable);
      console.log("editable is now", editable);
    }
  }
  return (
    // <View>
    <Pressable
      style={{
        height: 45,
        width: "100%",
        backgroundColor: editable ? "tomato" : "#BCD0C7",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 40,
        borderRadius: 8,
      }}
      // onPress={() => setEditable(!editable)}
      onPress={handleBtnPress}
    >
      <Text style={{ color: "whitesmoke", fontWeight: "500", fontSize: 16 }}>
        {editable ? "Save" : "Edit"}
      </Text>
    </Pressable>
    // </View>
  );
}
