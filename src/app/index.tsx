import { Alert, Image, ImageBackground, Platform, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";

// import { Image } from "expo-image"

import { MaterialIcons } from '@expo/vector-icons';

import { useState } from "react";

import { Link, useRouter } from "expo-router";

import { styles } from "../styles/loginStyle";

import {Ionicons} from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function index() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  
  const router = useRouter();

  const [text, setText] = useState("");

  const handleLogin = async() => {
    
    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Please enter both your username and password");
      return;
    }
    
    try {
      setLoading(true);

    const existUsersString = await AsyncStorage.getItem('registered_users');
    const existUsers = existUsersString ? JSON.parse(existUsersString) : [];

    if (existUsers.length === 0) {
      Alert.alert("Error", "No accounts found. Please register first!");
      return;
    }

    const foundUser = existUsers.find(
      (user: any) => 
        (user.whatsapp === username || user.Email === username) && 
        user.password === password
    );

    if (foundUser) {
      Alert.alert("Success", `Welcome back, ${foundUser.username}!`);
      
      router.replace('/home'); 
    } else {
      Alert.alert("Error", "Invalid username/email or password!");
      
    }
    } catch (error) {
      Alert.alert("Error", "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1 bg-white">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex flex-col w-full max-w-md mx-auto pb-[100px]">
            <View className="absolute -top-10 -left-12 w-64 h-64 bg-teal-200/40 rounded-full -z-10"></View>

            <View className="absolute top-56 -right-12 w-64 h-64 bg-amber-200/40 -z-10"></View>

            <View className="absolute top-[410] -left-12 w-64 h-64 bg-amber-200/40 rounded-full -z-10"></View>

            <View className="absolute top-[650] -right-12 w-64 h-64 bg-teal-200/40 -z-10"></View>

            <View className="relative w-full flex flex-col items-center pt-[30px] pb-2">
              <View className="flex flex-col items-center text-center space-y-20 mb-7">
                <View className="w-32 h-32 rounded-3xl border border-tertiary-container bg-secondary-fixed-dim/50 flex items-center justify-center p-3 transition-transform active:scale-95 duration-200">
                  <Image source={require("../../assets/images/img/Logo/LogoApps.jpg")} className="w-full h-full object-contain" />
                </View>

                  <Text className="top-[20] pb-5 max-w-[320] text-center color-[#00685f] font-headline-lg-mobile text-[30px] font-extrabold tracking-tight">🐾 Selamat Datang 🐾 Kembali!</Text>
                  <Text className="top-[20] p-3 font-body-md-mobile border border-tertiary-container bg-[#fea619]/10 text-[15px] max-w-[330] text-center text-amber-900 rounded-[30] tracking-tight leading-[1.5] mb-6">Masuk untuk temukan pet sitter terpercaya dan penuh kasih untuk anabul kesayanganmu.</Text>
              </View>

              <View className={styles.card}>
                <Text className="font-extrabold font-label-md mb-3">EMAIL / No. WhatsApp</Text>
                <View className="relative justify-center mb-2">
                  <View className="absolute left-4 z-10">
                    <Ionicons name="person-outline" size={20} color={isUsernameFocused ? "#00685f" : "#1c1b1b76"}/>
                  </View>
                  <TextInput
                    className={`${styles.input} ${isUsernameFocused ? 'border-2 border-[#6bd8cb]' : ''}`}
                    placeholder="Username"
                    placeholderTextColor="#1c1b1b76" 
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={() => setIsUsernameFocused(true)}  
                    onBlur={() => setIsUsernameFocused(false)}
                  />
                </View>
                
                <Text className="font-extrabold font-label-md mb-3 mt-5">Kata Sandi</Text>
                <View className="relative justify-center mb-4">
                  <View className="absolute left-4 z-10">
                    <Ionicons name="lock-closed-outline" size={20} color={isPasswordFocused ? "#00685f" : "#1c1b1b76"}/>
                  </View>
                  <TextInput
                    className={`${styles.input} pl-12 pr-12 ${isPasswordFocused ? 'border-2 border-[#6bd8cb]' : ''}`}
                    placeholder="Password"
                    placeholderTextColor="#1c1b1b76" 
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={secureText}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={() => setIsPasswordFocused(true)}  
                    onBlur={() => setIsPasswordFocused(false)}
                  />

                  <TouchableOpacity onPress={() => setSecureText(!secureText)} className="absolute right-3 p-2 z-10">
                    <Ionicons
                      name={secureText ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color="#1c1b1b76"
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity className={styles.button} onPress={() => router.replace('/home')} disabled={loading}>
                  <Text className="text-white font-semibold text-[16px]">{loading ? "Loading..." : "Login"}</Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center justify-center mt-20">
                <Text className="text-[16px] text-[#1c1b1b76]">Belum punya akun? </Text>
                <TouchableOpacity onPress={() => router.replace('/register')}>
                    <Text className="text-secondary-container font-bold text-[16px]">Daftar Sekarang</Text>
                </TouchableOpacity>
              </View>
          
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
      
      
      
  );
}



