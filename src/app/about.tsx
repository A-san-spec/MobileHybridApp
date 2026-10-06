import { Text, View, StyleSheet, Image } from "react-native";

import { Link } from "expo-router";

import BG from '../../assets/images/BG.jpg';


export default function about() {
  return (
    <View className="flex-1 justify-center items-center">
        <Image source={BG} className="absolute top-0 left-0 w-full h-full resize-cover"/>

        <View className="w-[85%] p-[24px] rounded-[16] bg-[#efeee8d9] ">
            <Text className="text-[30px]">About Us</Text>
            <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   card: {
//     width: '85%',
//     padding: 24,
//     borderRadius: 16,
//     backgroundColor: '#efeee8d9'
//   },

//   bgImage: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
// });
