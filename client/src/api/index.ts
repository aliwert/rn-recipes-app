import axios from "axios";

// Base API configuration
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Auth endpoints
export const loginUser = (email: string, password: string) =>
  API.post("/auth/login", { email, password });

export const registerUser = (
  username: string,
  email: string,
  password: string
) => API.post("/auth/register", { username, email, password });

// Recipe endpoints
export const getRecipes = () => API.get("/recipes");

export const getRecipeById = (id: string) => API.get(`/recipes/${id}`);

export const createRecipe = (recipeData: any) =>
  API.post("/recipes", recipeData);

export const updateRecipe = (id: string, recipeData: any) =>
  API.put(`/recipes/${id}`, recipeData);

export const deleteRecipe = (id: string) => API.delete(`/recipes/${id}`);

// Token interceptor
export const setAuthToken = (token: string) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export default API;
