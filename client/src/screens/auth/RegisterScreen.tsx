import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { registerUser } from "../../api";

type AuthStackParamList = {
  Login: undefined;
  Home: undefined;
};

type RegisterScreenNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleRegister = async () => {
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      await registerUser(username, email, password);
      navigation.replace("Home");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button
        title={isLoading ? "Creating Account..." : "Register"}
        onPress={handleRegister}
        disabled={isLoading}
      />
      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>
          Already have an account? Login here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
  error: {
    color: "#FF3B30",
    marginBottom: 16,
    textAlign: "center",
  },
  loginLink: {
    marginTop: 16,
  },
  loginText: {
    color: "#007AFF",
    textAlign: "center",
  },
});

export default RegisterScreen;
