import { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

import { getMovieDetailById } from "../api/movie_api";

export default function MovieTvDetailScreen({ route, navigation }) {
  const [movieDetail, setMovieDetail] = useState({});

  const fetchMovieDetailfromApi = async () => {
    const movieData = await getMovieDetailById(route?.params?.id);
    setMovieDetail(movieData);
  };

  useEffect(() => {
    fetchMovieDetailfromApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movieDetail.title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original${movieDetail?.poster_path}`,
        }}
      />
      <Text >{movieDetail.overview}</Text>
      <View style={styles.cont}>
        <Text>Popularity: {movieDetail.popularity} | </Text>
        <Text>Release Date: {movieDetail.release_date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    columnGap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    padding: 20,
  },
});
