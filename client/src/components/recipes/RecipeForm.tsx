import * as React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../common/Input";
import Button from "../common/Button";

interface RecipeFormProps {
  onSubmit: (data: RecipeFormData) => void;
  initialData?: RecipeFormData;
  isLoading?: boolean;
}

interface RecipeFormData {
  title: string;
  description: string;
  imageUrl: string;
}

const RecipeForm = ({ onSubmit, initialData, isLoading }: RecipeFormProps) => {
  const [title, setTitle] = React.useState(initialData?.title || "");
  const [description, setDescription] = React.useState(
    initialData?.description || ""
  );
  const [imageUrl, setImageUrl] = React.useState(initialData?.imageUrl || "");

  const handleSubmit = () => {
    onSubmit({
      title,
      description,
      imageUrl,
    });
  };

  return (
    <View style={styles.container}>
      <Input
        label="Title"
        value={title}
        onChangeText={setTitle}
        placeholder="Enter recipe title"
      />
      <Input
        label="Description"
        value={description}
        onChangeText={setDescription}
        placeholder="Enter recipe description"
      />
      <Input
        label="Image URL"
        value={imageUrl}
        onChangeText={setImageUrl}
        placeholder="Enter image URL"
      />
      <Button
        title={isLoading ? "Saving..." : "Save Recipe"}
        onPress={handleSubmit}
        disabled={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default RecipeForm;
