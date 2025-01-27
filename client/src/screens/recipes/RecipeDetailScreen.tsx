import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getRecipeById, deleteRecipe } from "../../api";
import Loading from "../../components/common/Loading";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RecipeDetailScreenNavigationProp = NativeStackNavigationProp<
  { EditRecipe: { id: string } },
  "EditRecipe"
>;

const RecipeDetailScreen = () => {
  const navigation = useNavigation<RecipeDetailScreenNavigationProp>();
  const route = useRoute();
  const { id }: any = route.params;

  const [recipe, setRecipe] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

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

  React.useEffect(() => {
    fetchRecipe();
  }, [id]);

  const handleEdit = () => {
    navigation.navigate("EditRecipe", { id });
  };

  const handleDelete = async () => {
    Alert.alert(
      "Delete Recipe",
      "Are you sure you want to delete this recipe?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteRecipe(id);
              navigation.goBack();
            } catch (err) {
              setError("Failed to delete recipe");
            }
          },
        },
      ]
    );
  };

  if (isLoading && !recipe) {
    return <Loading />;
  }

  if (!recipe) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error || "Recipe not found"}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {recipe.imageUrl && (
        <Image source={{ uri: recipe.imageUrl }} style={styles.image} />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666666",
  },
  actions: {
    flexDirection: "row",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  editButton: {
    flex: 1,
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
    alignItems: "center",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#FF3B30",
    padding: 12,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  errorText: {
    fontSize: 16,
    color: "#FF3B30",
  },
});

export default RecipeDetailScreen;
