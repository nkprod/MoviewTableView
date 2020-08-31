import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View, TextInput, StatusBar } from "react-native";

const HomeScreen = props => {
  return (
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password" />
            <StatusBar style="auto" />
            <View style={styles.buttonContainer}>
              <Button
                title="Signin"
                onPress={() => props.navigation.navigate('List')} />
              <Button
                title="Signup"
                onPress={() => alert("Navigate to SignUp Screen")} />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => alert("Navigate to ForgotPassword Screen")}>
                <Text>Forgot password</Text>
              </TouchableOpacity>
            </View>
          </View>
  )

        
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: 250,
    padding: 5,
    marginBottom: 10,
  },
  title: {
    color: 'black',
    fontSize: 24,
    marginBottom: 250,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    margin: 10,
  },
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
