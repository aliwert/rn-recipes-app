import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RecipeForm from "../../components/recipes/RecipeForm";
import { createRecipe } from "../../api";

type RootStackParamList = {
  Home: undefined;
};

type CreateRecipeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const CreateRecipeScreen = () => {
  const navigation = useNavigation<CreateRecipeScreenNavigationProp>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError("");
      await createRecipe(data);
      navigation.goBack();
    } catch (err) {
      setError("Failed to create recipe");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <RecipeForm onSubmit={handleSubmit} isLoading={isLoading} />
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

export default CreateRecipeScreen;
