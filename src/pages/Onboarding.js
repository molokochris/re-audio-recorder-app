import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import GetStartedButton from "../components/OnboardingComponents/GetStartedButton";
// import { WalkthroughSwiper } from "react-native-walkthrough-swiper";
import logo from "../../assets/logo.png";
import records from "../../assets/mic-icon.png";
// import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {
  return (
    <View style={style.container}>
      {/* <Text>TT</Text> */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground
        style={{ flex: 4 }}
        source={require("../../assets/cartoon.png")}
      >
        <View
          style={{
            marginTop: 80,
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={records} style={{ width: 50, height: 50 }} />
          <Image source={logo} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: 40,
          }}
        >
          <GetStartedButton />
          {/* <Text>GG</Text> */}
        </View>
      </ImageBackground>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
});
