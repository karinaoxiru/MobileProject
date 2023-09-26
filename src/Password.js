import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

export default function Password() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true); 

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Text
          style={styles.backText}
          onPress={() => navigation.navigate("Email")}
        >
          <AntDesign name="caretleft" size={24} color="#41C485" />
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>SignUp</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.senha}>Create password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={hidePassword} 
        />
        <TouchableOpacity
          style={styles.hideButton}
          onPress={togglePasswordVisibility} 
        >
          <Text>{hidePassword ? "Show" : "Hide"}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("Check")}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  back: {
    position: "absolute",
    top: 30,
    left: 20,
  },
  backText: {
    position: "absolute",
    top: 80,
    left: 30,
    color: "#41C485",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputContainer: {
    width: 300,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: "#41C485",
    borderRadius: 50,
    paddingVertical: 12,
    marginTop: 20,
    width: 300,
  },
  senha: {
    left: 20,
  },
  hideButton: {
    position: "absolute",
    top: 0,
    right: 10,
    bottom: 0,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});