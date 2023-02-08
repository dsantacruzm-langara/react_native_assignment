import { View, Text, StyleSheet, Image } from "react-native";

export default function MovieTvCard(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: 'https://picsum.photos/200'}}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
        <Text>Popularity: {props.popularity}</Text>
        <Text>Release Date: {props.releaseDate}</Text>
      </View>
    </View>
  );
}

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 24,
    margin: 5,
    borderWidth: 1,
  },
  logo: {
    width: 150,
    height: 150,
  },
});
