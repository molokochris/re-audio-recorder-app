import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import RegisterButton from "./RegisterButton";
import { StyleSheet } from "react-native";
import {
  FirebaseApp,
  FirebaseAuth,
  FirebaseDB,
} from "../../Auth/firebaseConfig";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  doc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword, Auth } from "@firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function RegisterForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [surname, setSurname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contactNumbers, setContactNumbers] = useState("");
  const [loading, setLoading] = useState(false);
  // const userRef = FirebaseDB.c;

  console.log("");
  const navigation = useNavigation();
  const auth = FirebaseAuth;

  //set up firestore
  const database = getFirestore();
  const userRef = collection(database, "users");

  const onRegister = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      let user = { fullname, surname, contactNumbers, email, dateOfBirth };
      const formRes = await addDoc(userRef, user);
      console.log(response);
      console.log(formRes);
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
        // value={fullname}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={style.input}
        placeholder="Surname"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="familyName"
        // value={surname}
        onChangeText={(text) => setSurname(text)}
      />
      <TextInput
        style={style.input}
        placeholder="Date of Birth"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        keyboardType="number-pad"
        onChangeText={(text) => setDateOfBirth(text)}
      />
      <TextInput
        style={style.input}
        placeholder="Contact numbers"
        placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="telephoneNumber"
        keyboardType="number-pad"
        onChangeText={(text) => setContactNumbers(text)}
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
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Already have an account?{" "}
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "tomato" }}>Login</Text>
        </Pressable>
      </Text>
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
