import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../context/AuhtContext";
import LoadingScreen from "../components/common/Loading";

import HomeScreen from "../screens/recipes/HomeScreen";
import RecipeDetailScreen from "../screens/recipes/RecipeDetailScreen";
import EditRecipeScreen from "../screens/recipes/EditRecipeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import CreateRecipeScreen from "../screens/recipes/CreateRecipeScreen";

export type RootStackParamList = {
  Home: undefined;
  RecipeDetail: { id: string };
  CreateRecipe: undefined;
  EditRecipe: { id: string };
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  const screenOptions = {
    headerShown: true,
    headerBackTitle: "",
    headerStyle: {
      backgroundColor: "#FFFFFF",
    },
    headerShadowVisible: false,
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "Home" : "Login"}
        screenOptions={screenOptions}
      >
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Recipes" }}
            />
            <Stack.Screen
              name="RecipeDetail"
              component={RecipeDetailScreen}
              options={{ title: "Recipe Details" }}
            />
            <Stack.Screen
              name="CreateRecipe"
              component={CreateRecipeScreen}
              options={{ title: "New Recipe" }}
            />
            <Stack.Screen
              name="EditRecipe"
              component={EditRecipeScreen}
              options={{ title: "Edit Recipe" }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: "Create Account" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
