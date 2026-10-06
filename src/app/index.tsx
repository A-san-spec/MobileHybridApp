import { Alert, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";

// import { Image } from "expo-image"

import { useState } from "react";

import { Link, useRouter } from "expo-router";

import { styles } from "../styles/loginStyle";

// import {Ionicons} from '@expo/vector-icons';


export default function Index() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [text, setText] = useState("");

  const handleLogin = () => {
    
    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Please enter both your username and password");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters long");
      return;
    }
    
    try {
      setLoading(true);

      if (username === "Budiono Siregar" && password ==="12345678"){
        Alert.alert("Success", "Login Successful");
        router.push("/home");
      }else{
        Alert.alert("Error", "Invalid username or password (Usernamenya : Budiono Siregar, Passwordnya : 12345678)");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <ImageBackground
      source={require('../../assets/images/BG.jpg')} // Sesuaikan path gambar kamu
      resizeMode="cover" // Bikin gambar pas di seluruh layar tanpa ketarik
      className="flex-1"
    >

        <View className={styles.innerContainer}>
          {/* <Ionicons name="person-circle-outline" size={100} color="#efbe56" style={{paddingBottom: 20}}/> */}

          <Text className="text-[50px] font-bold color-[#efbe56]">Welcome Back</Text>
          <Text className="text-base font-bold color-[#efbe56] pb-[0px]">Log in to your account</Text>

            <Image source={require('../../assets/images/user2.png')} style={{ width: 100, height: 100, marginVertical: 15 }} resizeMode="contain"/>

          <View className={styles.card}>
            <TextInput
              className={styles.input}
              placeholder="Username"
              placeholderTextColor="#1c1b1b76" 
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TextInput
              className={styles.input}
              placeholder="Password"
              placeholderTextColor="#1c1b1b76" 
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TouchableOpacity className={styles.button} onPress={handleLogin} disabled={loading} >
              <Text className="color-[#fff] text-base font-bold">Login</Text>
            </TouchableOpacity>
          </View>

          <View className={styles.linkContainer}>
            <Link href="/about" className={styles.link}>About Us</Link>
          </View>
        </View>
      
    </ImageBackground>
      
  );
}

/* const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },

//   innerContainer: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 100,

//   },


//   card: {
//     width: '85%',
//     padding: 24,
//     borderRadius: 16,
//     backgroundColor: 'rgba(239, 238, 232, 0.95)',
//     borderEndEndRadius: 30,
//   },


//   bgImage: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },

//   link: {
//         marginVertical: 40,
//         borderBottomWidth: 1,
//     },

//     input: {
//     height: 48,
//     backgroundColor: "rgba(255, 255, 255, 0.2)", 
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     color: "#000000", 
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: "rgba(242, 144, 7, 0.4)",
//     marginBottom: 12,
//   },

//   button: {
//     alignItems: "center",
//     justifyContent: "center",
//     height: 48,
//     backgroundColor: "#f29007",
//     borderRadius: 8,
//     marginTop: 50,
//   }

// }); */
