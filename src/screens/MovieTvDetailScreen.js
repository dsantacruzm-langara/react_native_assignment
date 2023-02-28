import { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

import { getMovieDetailById, getShowDetailById } from "../api/movie_api";

export default function MovieTvDetailScreen({ route, navigation }) {
  const [showDetail, setShowDetail] = useState({});

  const fetchShowDetailfromApi = async () => {
    if (route.params.fromScreen == "movies") {
      const movieData = await getMovieDetailById(route?.params?.id);
      setShowDetail(movieData);
    } else {
      const tvData = await getShowDetailById(route?.params?.id);
      setShowDetail(tvData);
    }
  };

  useEffect(() => {
    fetchShowDetailfromApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {route.params.fromScreen == "movies"
          ? showDetail.title
          : showDetail.name}
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original${showDetail?.poster_path}`,
        }}
      />
      <Text style={styles.description}>{showDetail.overview}</Text>
      <View style={styles.popularityRelease}>
        <Text>Popularity: {showDetail.popularity} | </Text>
        <Text>Release Date: {showDetail.release_date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 35
  },
  title: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 40,
    fontWeight: "bold",
  },
  image: {
    justifyContent: "center",
    marginBottom: 30,
    width: 275,
    height: 275,
  },
  description: {
    lineHeight: 22,
    alignSelf: 'flex-start'
  },
  popularityRelease: {
    display: 'flex',
    flexDirection: 'row',   
    marginTop: 30,
    alignSelf: 'flex-start'
  },
});
