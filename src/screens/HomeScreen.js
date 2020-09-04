
import React,{useState} from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View, TextInput, StatusBar } from "react-native";

const HomeScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
        <View style={styles.container}>
        <Text style={styles.logo}>MovieW</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => {setEmail(text)}}
            defaultText={email}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={text => {setPassword(text)}}
            defaultText={password}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            setEmail('');
            setPassword('');
            props.navigation.navigate('List');
            }} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
  )

        
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF6D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color: "#0D3344",
    // color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#f6d7b6",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"grey",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"orange",
    //fb5b5a
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"#0D3344"
  }
});

export default HomeScreen;



// import React from "react";
// import { Text, StyleSheet, Button, TouchableOpacity, View, TextInput, StatusBar } from "react-native";

// const HomeScreen = props => {
//   return (
//           <View style={styles.mainContainer}>
//             <Text style={styles.title}>Login</Text>
//             <TextInput style={styles.input} placeholder="Email" />
//             <TextInput
//               style={styles.input}
//               secureTextEntry={true}
//               placeholder="Password" />
//             <StatusBar style="auto" />
//             <View style={styles.buttonContainer}>
//               <Button
//                 title="Signin"
//                 onPress={() => props.navigation.navigate('List')} />
//               <Button
//                 title="Signup"
//                 onPress={() => alert("Navigate to SignUp Screen")} />
//             </View>
//             <View>
//               <TouchableOpacity
//                 onPress={() => alert("Navigate to ForgotPassword Screen")}>
//                 <Text>Forgot password</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//   )

        
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: "orange",
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     backgroundColor: '#fff',
//     width: 250,
//     padding: 5,
//     marginBottom: 10,
//   },
//   title: {
//     color: 'black',
//     fontSize: 24,
//     marginBottom: 250,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '40%',
//     margin: 10,
//   },
//   text: {
//     fontSize: 30
//   }
// });

// export default HomeScreen;
