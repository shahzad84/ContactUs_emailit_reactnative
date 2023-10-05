import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Form() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');  
  const [message, setMessage] = React.useState('');

  const handleSubmit = () => {
    // submit form data
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput 
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />  
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}  
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={text => setPhone(text)}
        keyboardType="phone-pad" 
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={text => setMessage(text)}
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
    backgroundColor: '#fff',    
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10
  }  
});