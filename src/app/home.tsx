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
          showsVerticalScrollIndicator={false}>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
      
      
      
  );
}



