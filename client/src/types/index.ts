// User types
export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Recipe types
export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface RecipeState {
  items: Recipe[];
  loading: boolean;
  error: string | null;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  RecipeDetail: { id: string };
  CreateRecipe: undefined;
  EditRecipe: { id: string };
  Login: undefined;
  Register: undefined;
};
