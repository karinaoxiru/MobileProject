import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

export default function CreateAccount() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const formatPhoneNumber = (number) => {
    const numericNumber = number.replace(/\D/g, "");

    if (numericNumber.length !== 11) {
      return numericNumber;
    }

    return `(${numericNumber.slice(0, 2)}) ${numericNumber.slice( 2,7 )}-${numericNumber.slice(7, 11)}`;
  };

  const handleRegister = () => {
    console.log("Name:", name);
    console.log("Birth:", birthdate);
    console.log("Address:", address);
    console.log("Phone Number:", formatPhoneNumber(phoneNumber));
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.back}
        onPress={() => navigation.navigate("Login")}
      >
        <AntDesign name="caretleft" size={24} color="#41C485" />
      </Text>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Birthdate"
        onChangeText={(text) => setBirthdate(text)}
        value={birthdate}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={(text) => setAddress(text)}
        value={address}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          secureTextEntry={!showPassword} 
        />
      </View>

      <TouchableOpacity
        style={[styles.button, { borderRadius: 50 }]}
        onPress={handleRegister}
      >
        <Text
          style={{ color: "#fff", textAlign: "center" }}
          onPress={() => navigation.navigate("Mail")}
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
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  back: {
    position: "absolute",
    top: 80,
    left: 30,
    color: "#41C485",
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    paddingHorizontal: 12,
  },
  showHideButton: {
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 20,
    width: 300,
    backgroundColor: "#41C485",
    paddingVertical: 12,
  },
});