import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MovieScreen from '../screens/MovieScreen';
import MovieTvDetailScreen from '../screens/MovieTvDetailScreen';
import SearchScreen from '../screens/SearchScreen';
import TvScreen from '../screens/TvScreen';

const Tab = createMaterialTopTabNavigator();

export default function MovieTabsLayout() {
  return (
    <Tab.Navigator
    //   initialRouteName="Feed"
    //   screenOptions={{
    //     tabBarActiveTintColor: '#e91e63',
    //     tabBarLabelStyle: { fontSize: 12 },
    //     tabBarStyle: { backgroundColor: 'powderblue' },
    //   }}
    >
      <Tab.Screen
        name="Movies"
        component={MovieScreen}
        // options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Search Results"
        component={SearchScreen}
        // options={{ tabBarLabel: 'Updates' }}
      />
      <Tab.Screen
        name="TV Shows"
        component={TvScreen}
        // options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}