import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const myIcon = <Icon name="rocket" size={30} color="#900" />;  
  const navigation = useNavigation();
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Mail:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Your mail"
        onChangeText={(text) => setMail(text)}
        value={email}
        multiline={false} 
      />
      <TextInput
        style={styles.input}
        placeholder="Your password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        multiline={false} 
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.createAccountText} onPress={() => navigation.navigate('CreateAccount')}>
        Create account now!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
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
  loginButton: {
    backgroundColor: "#41C485",
    borderRadius: 50,
    width: 300,
    paddingVertical: 12,
    marginTop: 12,
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
  },
  createAccountText: {
    marginTop: 30,
  },
});

