import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Adress from "../screens/Adress";
import Main from "../screens/Main";
import PlanMap from "../screens/PlanMap";
import Plans from "../screens/Plans";

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="adress"
          component={Adress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="plans"
          component={Plans}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="planmap"
          component={PlanMap}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
