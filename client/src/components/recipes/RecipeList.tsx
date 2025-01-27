import * as React from "react";
import { FlatList, StyleSheet, RefreshControl, Text, View } from "react-native";
import RecipeCard from "./RecipeCard";
import Loading from "../common/Loading";

interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

interface RecipeListProps {
  recipes: Recipe[];
  isLoading: boolean;
  onRefresh: () => void;
  onRecipePress: (recipe: Recipe) => void;
  error?: string;
}

const RecipeList = ({
  recipes,
  isLoading,
  onRefresh,
  onRecipePress,
  error,
}: RecipeListProps) => {
  if (isLoading && !recipes.length) {
    return <Loading text="Loading recipes..." />;
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!recipes.length) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>No recipes found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => (
        <RecipeCard
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          onPress={() => onRecipePress(item)}
        />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666666",
  },
  errorText: {
    fontSize: 16,
    color: "#FF3B30",
  },
});

export default RecipeList;
