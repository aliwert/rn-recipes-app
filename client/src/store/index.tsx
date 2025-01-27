import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import recipeReducer from "./slices/recipeSlice";

export interface RootState {
  auth: {
    isAuthenticated: boolean;
    user: any;
    loading: boolean;
    error: string | null;
  };
  recipes: {
    items: any[];
    loading: boolean;
    error: string | null;
  };
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
