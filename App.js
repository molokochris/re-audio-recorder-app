import { View, Text, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackView,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Onboarding from "./src/pages/Onboarding";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Home from "./src/pages/Home";
import Register from "./src/pages/Register";

// export default function App() {
//   const Stack = createNativeStackNavigator();
//   return (
//     <SafeAreaView>
//       <NavigationContainer>
//         {/* <StatusBar
//           backgroundColor={"rgba(0, 128, 111, 0.05)"}
//           translucent={true}
//         /> */}
//         <Stack.Navigator
//           initialRouteName="Onboarding"
//           // screenOptions={{ headerShown: false }}
//         >
//           <Stack.Screen name="Onboarding" component={Onboarding} />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Signup" component={Signup} />
//           <Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

// In App.js in a new project

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
