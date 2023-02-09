import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import { SearchByCategoryAndKeyword } from "../api/movie_api";
import MovieTvCard from "../components/MovieTvCard";

export default function SearchScreen({ navigation }) {
  //Dropdown categories
  const dropDownOptions = [
    { label: "Multi", value: "multi" },
    { label: "Movie", value: "movie" },
    { label: "Tv", value: "tv" },
  ];

  //Dropdown states
  const [open, setOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState("multi");
  const [options, setOptions] = useState(dropDownOptions);

  //TextInput States
  const [queryValue, setQueryValue] = useState("");

  //Search result state
  const [queryResponse, setQueryResponse] = useState([]);

  //Fetch Info
  const fetchDataFromApi = async (searchCategory, query) => {
    const response = await SearchByCategoryAndKeyword(searchCategory, query);
    setQueryResponse(response);
  };

  //Move to Details Screen
  const moveToMovieDetailScreen = (passingParams) => {
    navigation.navigate("Details", { id: passingParams, fromScreen: "movies"});
  };

  const moveToTvShowDetailScreen = (passingParams) => {
    navigation.navigate("Details", { id: passingParams, fromScreen: "tv" });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ backgroundColor: "white", borderWidth: 1 }}
        placeholder="Type here to translate!"
        onChangeText={setQueryValue}
        value={queryValue}
        onSubmitEditing={() => fetchDataFromApi(searchCategory, queryValue)}
      />
      <View>
        <DropDownPicker
          open={open}
          value={searchCategory}
          items={options}
          setOpen={setOpen}
          setValue={setSearchCategory}
          setItems={setOptions}
        />
        <Button
          title="Search"
          onPress={() => fetchDataFromApi(searchCategory, queryValue)}
        />
      </View>
      <FlatList
        data={queryResponse}
        renderItem={({ item }) => (
          <MovieTvCard
            id={item.id}
            image={item.poster_path}
            title={"title" in item ? item.title : item.name}
            popularity={item.popularity}
            releaseDate={item.release_date}
            onDetailButtonPress={"title" in item ? moveToMovieDetailScreen : moveToTvShowDetailScreen}
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
