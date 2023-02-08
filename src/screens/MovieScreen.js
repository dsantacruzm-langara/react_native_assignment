import { View, Text, StyleSheet, FlatList } from "react-native";

import Dropdown from "../components/Dropdown";
import { getMovieListByCategory } from "../api/movie_api";
import MovieTvCard from "../components/MovieTvCard";
import { useState } from "react";

export default function MovieScreen() {
  const [movieList, setMovieList] = useState([]);
  const [pickedCategory, setPickedCategory] = useState(["now_playing"]);

  const fetchDataFromApi = async (pickedOption) => {
    const movieList = await getMovieListByCategory(pickedOption);
    // console.log(movieList);
    setMovieList(movieList);
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
            title={item.title}
            popularity={item.popularity}
            releaseDate={item.release_date}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
