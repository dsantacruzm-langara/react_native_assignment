import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import MovieTabsLayout from "./src/layout/MovieTabsLayout";
import MovieTvDetailScreen from "./src/screens/MovieTvDetailScreen";

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
        <Stack.Screen name="Details" component={MovieTvDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
