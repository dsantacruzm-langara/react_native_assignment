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
      <Text style={{ fontWeight: "bold" }}>{movieDetail.title}</Text>
      <Image
        style={styles.logo}
        source={{
          uri: `https://image.tmdb.org/t/p/original${movieDetail?.poster_path}`,
        }}
      />
      <Text>{movieDetail.overview}</Text>
      <View style={styles.cont}>
        <Text>Popularity: {movieDetail.popularity}  |  </Text>
        <Text>Release Date: {movieDetail.release_date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    margin: 5,
    borderWidth: 1,
  },
  cont: {
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
