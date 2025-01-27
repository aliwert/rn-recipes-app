export type RootStackParamList = {
  Home: undefined;
  RecipeDetail: { id: string };
  CreateRecipe: undefined;
  EditRecipe: { id: string };
  Login: undefined;
  Register: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  RecipeDetail: { id: string };
  CreateRecipe: undefined;
  EditRecipe: { id: string };
};
