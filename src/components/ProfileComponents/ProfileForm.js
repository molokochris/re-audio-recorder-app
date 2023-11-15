import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import ProfileButton from "./ProfileSaveButton";
import { StyleSheet } from "react-native";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  doc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import ProfileSaveButton from "./ProfileSaveButton";

export default function ProfileForm() {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [surname, setSurname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contactNumbers, setContactNumbers] = useState("");
  const [loading, setLoading] = useState(false);
  const [editable, setEditable] = useState(false);
  const database = getFirestore();
  const ref = collection(database, "users");

  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(query(ref));
      // console.log(snapshot);
      snapshot.forEach((doc) => {
        let obj = doc.data();
        setFullName(obj.fullname);
        setEmail(obj.email);
        setContactNumbers(obj.contactNumbers);
        setDateOfBirth(obj.dateOfBirth);
        setSurname(obj.surname);
        console.log(obj);
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return loading ? (
    <View style={style.formContainer}>
      <ActivityIndicator size="large" color="whitesmoke" />
    </View>
  ) : (
    <View style={style.formContainer}>
      <TextInput
        style={style.input}
        // placeholder="Full names"
        // placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="name"
        value={fullname}
        onChangeText={(text) => setFullName(text)}
        editable={editable}
      />
      <TextInput
        style={style.input}
        // placeholder="Surname"
        // placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="familyName"
        value={surname}
        onChangeText={(text) => setSurname(text)}
        editable={editable}
      />
      <TextInput
        style={style.input}
        // placeholder="Date of Birth"
        // placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        keyboardType="number-pad"
        onChangeText={(text) => setDateOfBirth(text)}
        value={dateOfBirth}
        editable={editable}
      />
      <TextInput
        style={style.input}
        // placeholder="Contact numbers"
        // placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="telephoneNumber"
        keyboardType="number-pad"
        onChangeText={(text) => setContactNumbers(text)}
        value={contactNumbers}
        editable={editable}
      />
      <TextInput
        style={style.input}
        // placeholder="Email address"
        // placeholderTextColor="whitesmoke"
        cursorColor="tomato"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
        value={email}
        editable={editable}
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
      <ProfileSaveButton editable={editable} setEditable={setEditable} />
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
