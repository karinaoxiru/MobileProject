import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {AntDesign} from '@expo/vector-icons'

export default function Mail() {
  const navigation = useNavigation();
  const [email, setMail] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Text
          style={styles.backText}
          onPress={() => navigation.navigate("CreateAccount")}
        >
        <AntDesign name="caretleft" size={24} color="#41C485" />
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>SingUp</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.email}>What’s your email?</Text>
        <TextInput
          style={styles.input}
          placeholder="Mail"
          placeholderTextColor="#ccc"
          onChangeText={(text) => setMail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("Password")}
        >
          Next
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
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: "#41C485",
    borderRadius: 50,
    paddingVertical: 12,
    marginTop: 20,
    width: 300,
  },
  email: {
    left: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});