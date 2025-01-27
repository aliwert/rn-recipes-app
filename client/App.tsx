import * as React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./src/context";
import store from "./src/store";
import AppNavigator from "./src/navigation/AppNavigator";
import LoadingScreen from "./src/components/common/Loading";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const initApp = async () => {
      try {
        // Initialize async resources
        await Promise.all([
          // Add actual initialization here
          new Promise((resolve) => setTimeout(resolve, 1000)), // Remove this in production
        ]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    initApp();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <AuthProvider>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </AuthProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  error: {
    color: "#FF3B30",
    textAlign: "center",
    fontSize: 16,
  },
});

export default App;
