import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function MovieTvCard(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{uri: `https://image.tmdb.org/t/p/original${props.image}`}}
      />
      <View style={styles.infoWrap}>
        <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
        <Text>Popularity: {props.popularity}</Text>
        <Text>Release Date: {props.releaseDate}</Text>
        <Button
        title="Go to Details"
        onPress={() => props.onDetailButtonPress(props.id)}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 24,
    marginTop: 1,
    marginBottom: 1,
  },
  picture: {
    width: 100,
    height: 100,
  },
  infoWrap: {
    padding: 10,
  }
});
