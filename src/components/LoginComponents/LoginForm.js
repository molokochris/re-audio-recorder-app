import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import LoginButton from "./LoginButton";
import { StyleSheet } from "react-native";
import { FirebaseAuth } from "../../Auth/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FirebaseAuth;
  const navigation = useNavigation();
  // let userID = null;

  const onLogin = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      // alert("check your email!");
      let userID = response.user.uid;
      navigation.navigate("Home", { userID: userID });
      console.log(response.user.uid);
      // console.log(Object.keys(response));
    } catch (error) {
      console.log(error);
      alert("Failed!! " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <View style={style.formContainer}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={style.input}
          placeholder="Email address"
          placeholderTextColor="whitesmoke"
          cursorColor="tomato"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={style.input}
          placeholder="Password"
          placeholderTextColor="whitesmoke"
          cursorColor="tomato"
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        {/* {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : ( */}
        <Pressable style={{ alignSelf: "flex-end", marginBottom: 15 }}>
          <Text style={{ color: "whitesmoke" }}>forgot password?</Text>
        </Pressable>
        {/* )} */}
      </View>
      <LoginButton loading={loading} onLogin={onLogin} />
    </>
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
