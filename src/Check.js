import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import {AntDesign} from '@expo/vector-icons'

export default function Check() {
  const [codeParts, setCodeParts] = useState(["", "", "", ""]);

  const handleCheck = () => {
    const code = codeParts.join("");
    if (code.length === 4) {
      console.log("Valid code:", code);
    } else {
      console.log("Incorrect code!");
    }
  };

  const handleChangeCodePart = (text, index) => {
    if (/^\d*$/.test(text) && text.length <= 4) {
      const newCodeParts = [...codeParts];
      newCodeParts[index] = text;
      setCodeParts(newCodeParts);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Text
          style={styles.backText}
          onPress={() => navigation.navigate("Password")}
        >
          <AntDesign name="caretleft" size={24} color="#41C485" />
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>Check OTP</Text>
      <Text style={styles.description}>
        Please enter the code
      </Text>
      <View style={styles.codeInputContainer}>
        {codeParts.map((part, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            placeholder="0"
            onChangeText={(text) => handleChangeCodePart(text, index)}
            value={part}
            keyboardType="numeric"
            maxLength={4}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCheck}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>
      <Text>Didn’t Receive OTP ?</Text>
      <Text style={styles.text}>Resend Code</Text>
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
  text: {
    color: "#41C485",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
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
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#f5f5f5",
    fontSize: 24,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#41C485",
    borderRadius: 50,
    paddingVertical: 12,
    marginTop: 20,
    width: 300,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});