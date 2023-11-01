import { View, Text, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./src/pages/Onboarding";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Home from "./src/pages/Home";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView>
      <NavigationContainer>
        <StatusBar
          backgroundColor={"rgba(0, 128, 111, 0.05)"}
          translucent={true}
        />
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
