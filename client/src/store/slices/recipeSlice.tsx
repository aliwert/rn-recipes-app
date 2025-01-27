import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

interface RecipeState {
  items: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: RecipeState = {
  items: [],
  loading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    fetchRecipesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRecipesSuccess: (state, action: PayloadAction<Recipe[]>) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchRecipesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.items.push(action.payload);
    },
    updateRecipe: (state, action: PayloadAction<Recipe>) => {
      const index = state.items.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteRecipe: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
  },
});

export const {
  fetchRecipesStart,
  fetchRecipesSuccess,
  fetchRecipesFailure,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} = recipeSlice.actions;

export default recipeSlice.reducer;
