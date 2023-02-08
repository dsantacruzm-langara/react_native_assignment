import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function MovieTvCard(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: `https://image.tmdb.org/t/p/original${props.image}`}}
      />
      <View>
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
    margin: 5,
    borderWidth: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
