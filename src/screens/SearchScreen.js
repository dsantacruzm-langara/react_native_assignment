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
    navigation.navigate("Details", { id: passingParams, fromScreen: "movies" });
  };

  const moveToTvShowDetailScreen = (passingParams) => {
    navigation.navigate("Details", { id: passingParams, fromScreen: "tv" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Search Movie/TV Show Name</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Search movie or tv show"
          onChangeText={setQueryValue}
          value={queryValue}
          onSubmitEditing={() => fetchDataFromApi(searchCategory, queryValue)}
        />
      </View>
      <View style={styles.searchTypeWrapper}>
        <Text style={styles.label}>Choose Search Type</Text>
        <View style={styles.dropDownButtonWrap}>
          <DropDownPicker
            open={open}
            value={searchCategory}
            items={options}
            setOpen={setOpen}
            setValue={setSearchCategory}
            setItems={setOptions}
            style={{ marginBottom: 10 }}
          />
          <Button
            title="Search"
            onPress={() => fetchDataFromApi(searchCategory, queryValue)}
          />
        </View>
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
            onDetailButtonPress={
              "title" in item
                ? moveToMovieDetailScreen
                : moveToTvShowDetailScreen
            }
          />
        )}
        style={{ marginTop: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "stretch",
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
  },
  inputText: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
  },
  searchTypeWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  dropDownButtonWrap: {
    display: "flex",
  },
});
