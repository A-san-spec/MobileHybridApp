import { Alert, Image, ImageBackground, Platform, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";

// import { Image } from "expo-image"

import { MaterialIcons } from '@expo/vector-icons';

import { useState } from "react";

import { Link, useRouter } from "expo-router";

import { styles } from "../styles/loginStyle";

import {Ionicons} from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function register() {

  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [loading, setLoading] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isWhatsappFocused, setIsWhatsappFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordConfFocused, setIsPasswordConfFocused] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [confSecureText, setConfSecureText] = useState(true);
  
  const router = useRouter();

  const [text, setText] = useState("");

  const handleRegister = async() => {
    
  if (!username.trim() || !password.trim() || !whatsapp.trim() || !Email.trim() || !passwordConf.trim()) {
    Alert.alert("Error", "Please Fill All the Fields!");
    return;
  }

  if (username.length < 3) {
    Alert.alert("Error", "Username must be at least 3 characters long");
    return;
  }

  if (password.length < 8) {
    Alert.alert("Error", "Password must be at least 8 characters long");
    return;
  }
  
  if (password !== passwordConf) {
    Alert.alert("Error", "Passwords do not match");
    return;
  }

  if (!/^\d+$/.test(whatsapp)) {
    Alert.alert("Error", "WhatsApp number must contain only digits");
    return;
  }

  if (whatsapp.length < 10 || whatsapp.length > 15) {
    Alert.alert("Error", "WhatsApp number must be between 10 and 15 digits");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
    Alert.alert("Error", "Please enter a valid email address");
    return;
  }

  try {
    setLoading(true);

    const existUsersString = await AsyncStorage.getItem('registered_users');
    const existUsers = existUsersString ? JSON.parse(existUsersString) : [];

    const isEmailExist = existUsers.some((user: any) => user.Email === Email);
    const isWhatsappExist = existUsers.some((user: any) => user.whatsapp === whatsapp);
    
    if (isEmailExist) {
      Alert.alert("Error", "Email is already registered");
      return;
    }

    if (isWhatsappExist) {
      Alert.alert("Error", "WhatsApp number is already registered");
      return;
    }

    const newUser = {
      username,
      Email,
      whatsapp,
      password,
    };
    
    existUsers.push(newUser);
    await AsyncStorage.setItem('registered_users', JSON.stringify(existUsers));

    console.log("Data berhasil disimpan secara di lokal");

    Alert.alert("Success", "Registration Successful", [{text: "OK", onPress: () => router.replace('/')}]);
    
  } catch (error) {
    Alert.alert("Error", "An error occurred during registration");
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
          <View className="flex flex-col w-full max-w-md mx-auto pb-[150px]">
            <View className="absolute -top-10 -left-12 w-64 h-64 bg-teal-200/40 rounded-full -z-10"></View>

            <View className="absolute top-56 -right-12 w-64 h-64 bg-amber-200/40 -z-10"></View>

            <View className="absolute top-[410] -left-12 w-64 h-64 bg-amber-200/40 rounded-full -z-10"></View>

            <View className="absolute top-[650] -right-12 w-64 h-64 bg-teal-200/40 -z-10"></View>

            <View className="absolute top-[850] -left-15 w-64 h-64 bg-amber-200/40 -z-10"></View>

            <View className="relative w-full flex flex-col items-center pt-[30px] pb-2">
              <View className="flex flex-col items-center text-center space-y-20 mb-7">
                <View className="w-32 h-32 rounded-3xl border border-tertiary-container bg-secondary-fixed-dim/50 flex items-center justify-center p-3 transition-transform active:scale-95 duration-200">
                  <Image source={require("../../assets/images/img/Logo/LogoApps.jpg")} className="w-full h-full object-contain" />
                </View>

                  <Text className="top-[20] pb-5 max-w-[320] text-center color-[#00685f] font-headline-lg-mobile text-[30px] font-extrabold tracking-tight">🐾 Silahkan Daftar 🐾 Duhai Pemiliik Anabul!</Text>
                  <Text className="top-[20] p-3 font-body-md-mobile border border-tertiary-container bg-[#fea619]/10 text-[15px] max-w-[330] text-center text-amber-900 rounded-[30] tracking-tight leading-[1.5] mb-6">Daftar dan titipkan Anabul kesayanganmu ke PetSitter terpercaya dari aplikasi kami.</Text>
              </View>

              <View className={styles.card}>
                <Text className="font-extrabold font-label-md mb-3">Nama Lengkap</Text>
                <View className="relative justify-center mb-2">
                  <View className="absolute left-4 z-10">
                    <Ionicons name="person" size={20} color={isUsernameFocused ? "#00685f" : "#1c1b1b76"}/>
                  </View>
                  <TextInput
                    className={`${styles.input} ${isUsernameFocused ? 'border-2 border-[#6bd8cb]' : ''}`}
                    placeholder="Contoh : Budiono Siregar"
                    placeholderTextColor="#1c1b1b76" 
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={() => setIsUsernameFocused(true)}  
                    onBlur={() => setIsUsernameFocused(false)}
                  />
                </View>

                <Text className="font-extrabold font-label-md mb-3 mt-5">Email</Text>
                <View className="relative justify-center mb-2">
                  <View className="absolute left-4 z-10">
                    <Ionicons name="mail" size={20} color={isEmailFocused ? "#00685f" : "#1c1b1b76"}/>
                  </View>
                  <TextInput
                    className={`${styles.input} ${isEmailFocused ? 'border-2 border-[#6bd8cb]' : ''}`}
                    placeholder="ex : cuking123@gmail.com"
                    placeholderTextColor="#1c1b1b76" 
                    value={Email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={() => setIsEmailFocused(true)}  
                    onBlur={() => setIsEmailFocused(false)}
                  />
                </View>

                <Text className="font-extrabold font-label-md mb-3 mt-5">Nomor WhatsApp</Text>
                <View className="relative justify-center mb-2">
                  <View className="absolute left-4 z-10">
                    <Ionicons name="logo-whatsapp" size={20} color={isWhatsappFocused ? "#00685f" : "#1c1b1b76"}/>
                  </View>
                  <TextInput
                    className={`${styles.input} ${isWhatsappFocused ? 'border-2 border-[#6bd8cb]' : ''}`}
                    placeholder="Contoh : 08XXXXXXXX"
                    placeholderTextColor="#1c1b1b76" 
                    value={whatsapp}
                    onChangeText={setWhatsapp}
                    autoCapitalize="none"
                    keyboardType="numeric"
                    autoCorrect={false}
                    onFocus={() => setIsWhatsappFocused(true)}  
                    onBlur={() => setIsWhatsappFocused(false)}
                  />
                </View>

                <Text className="font-extrabold font-label-md mb-3 mt-5">Kata Sandi</Text>
                <View className="relative justify-center mb-4">
                  <View className="absolute left-4 z-10">
                    <Ionicons name="lock-closed-outline" size={20} color={isPasswordFocused ? "#00685f" : "#1c1b1b76"}/>
                  </View>
                  <TextInput
                    className={`${styles.input} pl-12 pr-12 ${isPasswordFocused ? 'border-2 border-[#6bd8cb]' : ''}`}
                    placeholder="Kata Sandi"
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

                <Text className="font-extrabold font-label-md mb-3 mt-5">Konfirmasi Kata Sandi</Text>
                <View className="relative justify-center mb-4">
                  <View className="absolute left-4 z-10">
                    <Ionicons name="lock-closed-outline" size={20} color={isPasswordConfFocused ? "#00685f" : "#1c1b1b76"}/>
                  </View>
                  <TextInput
                    className={`${styles.input} pl-12 pr-12 ${isPasswordConfFocused ? 'border-2 border-[#6bd8cb]' : ''}`}
                    placeholder="Ulangi Kata Sandi"
                    placeholderTextColor="#1c1b1b76" 
                    value={passwordConf}
                    onChangeText={setPasswordConf}
                    secureTextEntry={confSecureText}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={() => setIsPasswordConfFocused(true)}  
                    onBlur={() => setIsPasswordConfFocused(false)}
                  />

                  <TouchableOpacity onPress={() => setConfSecureText(!confSecureText)} className="absolute right-3 p-2 z-10">
                    <Ionicons
                      name={confSecureText ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color="#1c1b1b76"
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity className={styles.button} onPress={handleRegister} disabled={loading}>
                  <Text className="text-white font-semibold text-[16px]">{loading ? "Loading..." : "Daftar"}</Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center justify-center mt-20">
                <Text className="text-[16px] text-[#1c1b1b76]">Sudah punya akun? </Text>
                <TouchableOpacity onPress={() => router.replace('/')}>
                    <Text className="text-secondary-container font-bold text-[16px]">Login</Text>
                </TouchableOpacity>
              </View>
          
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
      
      
      
  );
}



