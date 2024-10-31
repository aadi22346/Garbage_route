const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import ChangePassword from "./screens/ChangePassword";
import Maps from "./screens/Maps";
import Profile from "./screens/Profile";
import Activity from "./screens/Activity";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Jost-Medium": require("./assets/fonts/Jost-Medium.ttf"),
    "Jost-Bold": require("./assets/fonts/Jost-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Maps"
              component={Maps}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
             name="Activity"
             component={Activity}
             options={{ headerShown: false }}
             />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
