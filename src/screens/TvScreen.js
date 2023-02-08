import { View, Text, StyleSheet } from "react-native";

export default function TvScreen() {
  return (
    <View style={styles.container}>
      <Text>TvScreen</Text>
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
