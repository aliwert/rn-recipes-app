import * as React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

interface LoadingProps {
  text?: string;
  size?: "small" | "large";
}

const Loading = ({ text, size = "large" }: LoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color="#007AFF" />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: "#333333",
  },
});

export default Loading;
