import { Alert, Image, Platform, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";

// import { Image } from "expo-image"

import { MaterialIcons } from '@expo/vector-icons';

import { useState } from "react";

import { Link, useRouter } from "expo-router";

import { styles } from "../styles/loginStyle";

import {Ionicons} from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function index() {
  return (
    
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
            <View className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen">
                <View className="w-full bg-white p-4 border-b justify-center justify-between flex-row border-gray-200">
                    <View className="flex-row items-center space-x-4 gap-1.5">
                        <View className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Ionicons name="location" size={20} color="#008378"/>
                        </View>
                        <View>
                            <Text className="text-[12px] font-normal text-gray-500">Your current location</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail" className="w-40 text-[15px] font-bold ">Pondok Gede, Bekasi</Text>
                        </View>
                    </View>

                    <View className="flex-row items-center space-x-4 gap-1.5">
                        <View>
                            <Ionicons name="notifications-outline" size={20} color="#008378"></Ionicons>
                        </View>

                        <View className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Ionicons name="person-sharp" size={20} color="#008378"></Ionicons>
                        </View>
                    </View>
                </View>

                <View className="">
                    <View className="w-full mb-3 p-4 justify-center justify-between flex-row border-gray-200 flex-row justify-between">
                        <View className="flex gap-1.5">
                            <Text className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Hello, Masseh!  👋</Text>
                            <Text className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Siapa anabul yang butuh perhatian hari ini?</Text>
                        </View>

                        <View className="w-16 h-16 rounded-full  overflow-hidden shadow-sm bg-surface-container-high">
                            <Image source={require('../../assets/images/BG.jpg')} style={{ width: '100%', height: '100%' }} resizeMode="cover"></Image>
                        </View>
                    </View>

                    <View className="flex-row">
                        <View className="group flex flex-row items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full bg-primary text-on-primary shadow-sm">
                            <View className="w-10 h-10 rounded-full  overflow-hidden shadow-sm bg-surface-container-high">
                                <Image source={require('../../assets/images/Sapi2.jpg')} style={{ width: '100%', height: '100%' }} resizeMode="cover"></Image>
                            </View>
                            <View className="flex flex-col text-left leading-tight">
                                <Text className="font-label-md text-white text-label-md">Milo</Text>
                                <Text className="font-label-sm text-white text-label-sm opacity-90">Golden Retriever</Text>
                            </View>
                        </View>
                        <View className="group flex flex-row items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full bg-surface-container text-on-primary shadow-sm">
                            <View className="w-10 h-10 rounded-full  overflow-hidden shadow-sm bg-surface-container-high">
                                <Image source={require('../../assets/images/Sapi2.jpg')} style={{ width: '100%', height: '100%' }} resizeMode="cover"></Image>
                            </View>
                            <View className="flex flex-col text-left leading-tight">
                                <Text className="font-label-md text-black text-label-md">Brito</Text>
                                <Text className="font-label-sm text-black text-label-sm opacity-90">British Shorthair</Text>
                            </View>
                        </View>
                        <View className="flex flex-row items-center gap-1.5 px-3 py-2 rounded-full bg-surface-container-low text-primary hover:bg-surface-container shrink-0 transition-colors active:scale-95">
                            <View>
                                <Ionicons name="add-circle-sharp" size={20} color="#008378"></Ionicons>
                            </View>
                            <Text className="text-primary">Tambah Anabul</Text>
                        </View>
                    </View>
                </View>
                
            </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      
      
      
  );
}



