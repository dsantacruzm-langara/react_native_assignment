import { View, Text, StyleSheet } from "react-native";

export default function MovieScreen() {
  return (
    <View style={styles.container}>
      <Text>MovieScreen</Text>
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
