import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import { Audio } from "expo-av";
import React, { useState } from "react";
import * as FileSystem from "expo-file-system";
import records from "./assets/mic-icon.png";
import records2 from "./assets/mic-icon-2.png";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor="#BCD0C7" />
      <View style={styles.head}>
        <Image source={records} style={{ width: 50, height: 50 }} />
        <Image source={logo} />
        {/* <Text style={styles.logo}>Snip</Text> */}
      </View>
      <View style={styles.overContainer}>
        <View style={styles.recordList}></View>
        {/* <View> */}
        <View style={[styles.recordBtn, styles.Btn]}>
          <View style={styles.recordBtn}>
            <Text style={styles.recordBtnText}>Record</Text>
          </View>
        </View>
        {/* </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCD0C7",
    // backgroundColor: "#BCD0C7",
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  head: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    fontSize: 30,
    fontWeight: "800",
    // fontStyle:"italic",
    color: "maroon",
    color: "white",
  },
  overContainer: {
    flex: 6,
    // height: "85%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#B2B2B2",
    alignItems: "center",
  },
  recordList: {
    width: "100%",
    borderWidth: 4,
    borderRadius: 20,
    // height: "50%",
    flex: 8,
    marginBottom: 10,
    borderColor: "#BCD0C7",
    // borderColor: "#E9E3E6",
  },
  Btn: {
    padding: 10,
    backgroundColor: "#E9E3E6",
    borderRadius: 100,
    width: 100,
    height: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // flex:1,
  },
  recordBtn: {
    height: 90,
    width: 90,
    borderRadius: 100,
    padding: 10,
    backgroundColor: "#9A8F97",
    // backgroundColor: "#EB5E55",
    justifyContent: "center",
    alignItems: "center",
  },
  recordBtnText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
