import { Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

// import { Image } from "expo-image"

import { MaterialIcons } from '@expo/vector-icons';

import { useState, useEffect  } from "react";

import { useRouter, useSegments } from "expo-router";

import { BackHandler } from 'react-native';


import { Ionicons } from '@expo/vector-icons';
export default function Page() {
    const [search, setSearch] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [activeTab, setActiveTab] = useState("Profile"); //Default page yg aktif, kalo Profile, yaaa nanti jadi profile, kalo pesanan nanti jadi pesanan
    

    const segments = useSegments();
    const router = useRouter();
    

    useEffect(() => 
        {
            const backAction = () => {
                const currentRoute = segments[segments.length - 1];
                if (currentRoute !== 'home') {
                    router.replace('/home');
                    return true;
                }
                return false;
            };
        
            const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
            return () => backHandler.remove();
        }, []);

  return (
    <View className="flex-1 bg-white">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false} className="bg-surface">

            {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View>Profile</View>
                <View>
                    <View></View>
                    <View></View>
                    <View></View>
                </View>

            </TouchableWithoutFeedback> */}

        </ScrollView>

        <View className="flex-row right-0 bg-white border-t border-gray-200 py-3 px-2 justify-between items-center shadow-lg">
                <TouchableOpacity 
                    onPress={() => {setActiveTab('Home'); router.replace('/home');}} 
                    className="items-center flex-1"
                    activeOpacity={0.7}
                >
                    <Ionicons 
                        name={activeTab === 'Home' ? 'home' : 'home-outline'} 
                        size={24}
                        color={activeTab === 'Home' ? '#008378' : '#747474'} 
                        />
                    <Text className={`text-[12px] mt-1 ${activeTab === 'Home' ? 'text-primary font-bold' : 'text-gray-500 font-medium'}`}>
                        Home
                    </Text> 
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => setActiveTab('Search')} 
                    className="items-center flex-1"
                    activeOpacity={0.7}
                >  
                    <Ionicons 
                    name={activeTab === 'Search' ? 'compass' : 'compass-outline'} 
                    size={24} 
                    color={activeTab === 'Search' ? '#008378' : '#747474'} 
                    />
                    <Text className={`text-[12px] mt-1 ${activeTab === 'Search' ? 'text-primary font-bold' : 'text-gray-500 font-medium'}`}>
                        Search
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => setActiveTab('Pesanan')} 
                    className="items-center flex-1"
                    activeOpacity={0.7}
                >
                    <Ionicons 
                        name={activeTab === 'Pesanan' ? 'document-text' : 'document-text-outline'} 
                        size={24} 
                        color={activeTab === 'Pesanan' ? '#008378' : '#747474'} 
                    />
                    <Text className={`text-[12px] mt-1 ${activeTab === 'Pesanan' ? 'text-primary font-bold' : 'text-gray-500 font-medium'}`}>
                        Pesanan
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {setActiveTab('Profile');}} 
                    className="items-center flex-1"
                    activeOpacity={0.7}
                >
                    <Ionicons 
                        name={activeTab === 'Profile' ? 'person' : 'person-outline'} 
                        size={24} 
                        color={activeTab === 'Profile' ? '#388e87' : '#747474'} 
                    />
                    <Text className={`text-[12px] mt-1 ${activeTab === 'Profil' ? 'text-primary font-bold' : 'text-gray-500 font-medium'}`}>
                        Profile
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
  );
}

