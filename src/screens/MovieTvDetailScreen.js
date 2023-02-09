import { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

import { getMovieDetailById, getShowDetailById } from "../api/movie_api";

export default function MovieTvDetailScreen({ route, navigation }) {
  const [showDetail, setShowDetail] = useState({});

  const fetchShowDetailfromApi = async () => {
    if (route.params.fromScreen == "movies") {
      const movieData = await getMovieDetailById(route?.params?.id);
      setShowDetail(movieData);
    }
    else {
      const tvData = await getShowDetailById(route?.params?.id);
      setShowDetail(tvData);
    }

  };

  useEffect(() => {
    fetchShowDetailfromApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.fromScreen == "movies" ? showDetail.title : showDetail.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original${showDetail?.poster_path}`,
        }}
      />
      <Text >{showDetail.overview}</Text>
      <View style={styles.cont}>
        <Text>Popularity: {showDetail.popularity} | </Text>
        <Text>Release Date: {showDetail.release_date}</Text>
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
