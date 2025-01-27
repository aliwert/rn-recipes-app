import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import RecipeForm from "../../components/recipes/RecipeForm";
import { getRecipeById, updateRecipe } from "../../api";
import Loading from "../../components/common/Loading";

const EditRecipeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id }: any = route.params;

  const [recipe, setRecipe] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsLoading(true);
        const response = await getRecipeById(id);
        setRecipe(response.data);
      } catch (err) {
        setError("Failed to fetch recipe");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      setIsLoading(true);
      await updateRecipe(id, data);
      navigation.goBack();
    } catch (err) {
      setError("Failed to update recipe");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && !recipe) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {recipe && (
        <RecipeForm
          onSubmit={handleSubmit}
          initialData={recipe}
          isLoading={isLoading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
});

export default EditRecipeScreen;
