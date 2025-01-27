import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface RecipeCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onPress: () => void;
}

const RecipeCard = ({
  title,
  description,
  imageUrl,
  onPress,
}: RecipeCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666666",
  },
});

export default RecipeCard;
