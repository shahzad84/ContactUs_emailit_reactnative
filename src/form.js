import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Form() {
  const [user_name, setName] = React.useState("");
  const [user_email, setEmail] = React.useState("");
  const [user_phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_csy00tb",
        "template_cmolh24",
        form.current,
        "NQF0bljVzFj-2Zzqv"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <View style={styles.container} ref={form}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={user_name}
        onChangeText={(text) => setName(text)}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user_email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={user_phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={(text) => setMessage(text)}
        multiline
        numberOfLines={4}
        
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
  },
});
