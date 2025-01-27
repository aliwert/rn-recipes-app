import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button = ({ title, onPress, variant = "primary" }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "secondary" && styles.buttonSecondary]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, variant === "secondary" && styles.textSecondary]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  textSecondary: {
    color: "#007AFF",
  },
});

export default Button;
