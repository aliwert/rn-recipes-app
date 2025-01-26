import * as React from "react";
import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recipes App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#f8f8f8",
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
