import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RecipeList from "../../components/recipes/RecipeList";
import { getRecipes } from "../../api";

type RootStackParamList = {
  RecipeDetail: { id: string };
};

type RecipeListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "RecipeDetail"
>;

const RecipeListScreen = () => {
  const navigation = useNavigation<RecipeListScreenNavigationProp>();
  const [recipes, setRecipes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const fetchRecipes = async () => {
    try {
      setIsLoading(true);
      const response = await getRecipes();
      setRecipes(response.data);
    } catch (err) {
      setError("Failed to fetch recipes");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchRecipes();
  }, []);

  const handleRecipePress = (recipe) => {
    navigation.navigate("RecipeDetail", { id: recipe.id });
  };

  return (
    <View style={styles.container}>
      <RecipeList
        recipes={recipes}
        isLoading={isLoading}
        onRefresh={fetchRecipes}
        onRecipePress={handleRecipePress}
        error={error}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default RecipeListScreen;
