import AsyncStorage from "@react-native-async-storage/async-storage";

// Token Management
export const setToken = async (token: string): Promise<void> => {
  await AsyncStorage.setItem("token", token);
};

export const getToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem("token");
};

export const removeToken = (): void => {
  localStorage.removeItem("token");
};

// Form Validation
export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

// Date Formatting
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
};

// Error Handling
export const handleApiError = (error: any): string => {
  if (error.response) {
    return error.response.data.message || "An error occurred";
  }
  return "Network error occurred";
};

// Image Handling
export const getImageUrl = (url: string | undefined): string => {
  if (!url) return "https://via.placeholder.com/300";
  return url.startsWith("http") ? url : `${process.env.API_URL}${url}`;
};
