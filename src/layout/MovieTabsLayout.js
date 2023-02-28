import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MovieScreen from "../screens/MovieScreen";
import MovieTvDetailScreen from "../screens/MovieTvDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import TvScreen from "../screens/TvScreen";

const Tab = createMaterialTopTabNavigator();

export default function MovieTabsLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movies"
        component={MovieScreen}
      />
      <Tab.Screen
        name="Search Results"
        component={SearchScreen}
      />
      <Tab.Screen
        name="TV Shows"
        component={TvScreen}
      />
    </Tab.Navigator>
  );
}
