import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  rightComponent?: React.ReactNode;
}

const Header = ({ title, showBack = false, rightComponent }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContainer}>
        {rightComponent && rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  leftContainer: {
    width: 40,
  },
  rightContainer: {
    width: 40,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
  },
  backButton: {
    fontSize: 24,
    color: "#007AFF",
  },
});

export default Header;
