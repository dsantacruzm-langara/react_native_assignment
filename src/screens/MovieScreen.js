import { View, Text, StyleSheet, FlatList } from "react-native";

import Dropdown from "../components/Dropdown";
import { getMovieListByCategory } from "../api/movie_api";
import MovieTvCard from "../components/MovieTvCard";
import { useState } from "react";

export default function MovieScreen({ navigation }) {
  const [movieList, setMovieList] = useState([]);
  const [pickedCategory, setPickedCategory] = useState(["now_playing"]);

  //Fetch Info
  const fetchDataFromApi = async (pickedOption) => {
    const movieList = await getMovieListByCategory(pickedOption);
    setMovieList(movieList);
  };

  //Move to Details Screen
  const moveToDetailScreen = (passingParams) => {
    navigation.navigate("Details", { id: passingParams, fromScreen: "movies" });
  };

  const dropDownOptions = [
    { label: "Now playing", value: "now_playing" },
    { label: "Popular", value: "popular" },
    { label: "Top rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  return (
    <View style={styles.container}>
      <Dropdown
        dropDownOptions={dropDownOptions}
        fetchData={fetchDataFromApi}
      />
      <FlatList
        data={movieList}
        renderItem={({ item }) => (
          <MovieTvCard
            id={item.id}
            image={item.poster_path}
            title={item.title}
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
