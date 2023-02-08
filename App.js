import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import MovieTabsLayout from "./src/layout/MovieTabsLayout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#4682B4",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="MovieApp" component={MovieTabsLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
