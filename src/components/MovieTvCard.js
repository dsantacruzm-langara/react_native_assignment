import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function MovieTvCard(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{uri: `https://image.tmdb.org/t/p/original${props.image}`}}
      />
      <View style={styles.infoWrap}>
        <Text style={styles.title}>{props.title}</Text>
        <Text>Popularity: {props.popularity}</Text>
        <Text>Release Date: {props.releaseDate}</Text>
        <Button
        title="Go to Details"
        onPress={() => props.onDetailButtonPress(props.id)}
        style={styles.button}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    width: '100%'    
  },
  picture: {
    width: 100,
    height: 100,
  },
  infoWrap: {
    display: 'flex',
    flexDirection: "column",
    marginLeft: 10,
    flex: 1,
  },
  title:{
    fontSize: 18,
    fontStyle: 'bold'
  },
  button: {
    flex: 1
  }
});
