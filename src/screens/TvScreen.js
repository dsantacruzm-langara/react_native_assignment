import { View, Text, StyleSheet, FlatList } from "react-native";

import Dropdown from "../components/Dropdown";
import { getTvShowListByCategory } from "../api/movie_api";
import MovieTvCard from "../components/MovieTvCard";
import { useState } from "react";

export default function TvScreen({ navigation }) {
  const [tvShowsList, setTvShowsList] = useState([]);
  const [pickedCategory, setPickedCategory] = useState(["now_playing"]);

  //Fetch Info
  const fetchDataFromApi = async (pickedOption) => {
    const response = await getTvShowListByCategory(pickedOption);
    setTvShowsList(response);
  };

  //Move to Details Screen
  const moveToDetailScreen = (passingParams) => {
    navigation.navigate("Details", { id: passingParams, fromScreen: "tv" });
  };

  const dropDownOptions = [
    { label: "Popular", value: "popular" },
    { label: "On the Air", value: "on_the_air" },
    { label: "Airing Today", value: "airing_today" },
  ];

  return (
    <View style={styles.container}>
      <Dropdown
        dropDownOptions={dropDownOptions}
        fetchData={fetchDataFromApi}
      />
      <FlatList
        data={tvShowsList}
        renderItem={({ item }) => (
          <MovieTvCard
            id={item.id}
            image={item.poster_path}
            title={item.name}
            popularity={item.popularity}
            releaseDate={item.release_date}
            onDetailButtonPress={moveToDetailScreen}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  list: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 100,
  },
});
