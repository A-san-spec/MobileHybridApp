import { Image, Keyboard, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { useRouter, useSegments } from "expo-router";
import { BackHandler } from 'react-native';
import { petsData } from './data';

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
    <View className="flex-1">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false} className="bg-surface">

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View className="bg-background font-body-md text-on-surface flex flex-col min-h-screen p-5">

                        {/* Title */}
                        <View className="pb-4 flex-row items-center gap-3 mt-5">
                            <View className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <MaterialIcons name="person" size={20} color="#00685f" />
                            </View>
                            
                            <Text className="text-xl font-bold text-on-surface tracking-tight">Profile Pengguna</Text>
                        </View>

                        {/* Profile =-------*/}
                        <View className="flex flex-col gap-4">
                            <View className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col gap-4">
                                <View className="flex-row items-center gap-3.5">
                                    <View className="relative shrink-0">
                                        <View className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-surface-container shadow-inner">
                                            <Image 
                                                source={{uri:'https://lh3.googleusercontent.com/aida-public/AB6AXuB6EuBP4mtvcRx2iE-c80-ISQo-SnB5AnK5Djifg4oWzIKBLxk3T12ZfqFFShGPX6gED4JuxRzKptxGO3HtDqcotiQRv2uNH8r5i2l-VVU5rd3tdbnvZWEO0AKaqCyYgt7kKbxciI26bqPnVON1mGTpHTSw4H6Ju3SeK0BskhOYFfgQagb3p58K4ima33zMF2TN1Yajddl_2P38aa5KM9vky_PnUJgtRhTZkmhVB4w'}} 
                                                style={{ width: '100%', height: '100%' }} 
                                                resizeMode="cover">
                                            </Image>
                                        </View>
                                    </View>
                                    <View className="flex flex-col min-w-0 flex-1">
                                        <View className="text-base font-bold text-on-surface truncate">
                                            <Text className="text-base font-bold text-on-surface truncate">Maya</Text>
                                        </View>
                                        <Text className="text-xs text-on-surface-variant mt-0.5">Kucing ku dan anjingku the best lahhhh !!!!</Text>
                                    </View>

                                </View>
                                <View className="bg-surface-container-low/70 rounded-DEFAULT p-3 flex flex-col gap-2.5 border border-outline-variant/20">
                                    <View className="flex items-center flex-row justify-between gap-2">
                                        <View className="flex flex-row items-center gap-2.5 min-w-0">
                                            <View className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <Ionicons name="call-outline" size={20} color="#008378" />
                                            </View>
                                            <View className="flex flex-col min-w-0">
                                                <Text className="text-[10px] font-medium text-on-surface-variant">WhatsApp</Text>
                                                <Text className="text-xs font-semibold text-on-surface truncate">+62 812-3456-7890</Text>
                                            </View>
                                        </View>
                                        
                                        <MaterialIcons name="check-circle" size={16} color="#00685f" />
                                    </View>

                                    <View className="h-px bg-outline-variant/30"></View>
                                    <View className="flex flex-row items-center justify-between gap-2">
                                       <View className="flex flex-row items-center gap-2.5 min-w-0">
                                            <View className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <Ionicons name="mail-outline" size={20} color="#008378" />
                                            </View>
                                            <View className="flex flex-col min-w-0">
                                                <Text className="text-[10px] font-medium text-on-surface-variant">WhatsApp</Text>
                                                <Text className="text-xs font-semibold text-on-surface truncate">+62 812-3456-7890</Text>
                                            </View>
                                        </View>
                                        
                                        <MaterialIcons name="check-circle" size={16} color="#00685f" /> 
                                    </View>
                                </View>
                                
                                <TouchableOpacity className="w-full h-10 rounded-full border flex-row border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary flex items-center justify-center gap-1.5 active:scale-[0.98]">
                                    <Ionicons name="pencil-outline" size={20} color="#008378" />
                                    <Text className="text-xs font-bold color-primary">Edit Profile</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Alamat */}
                            <View className="bg-surface-container-lowest rounded p-4 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
                                
                                <View className="flex flex-row items-center justify-between">
                                    <View className="flex flex-row items-center gap-2">
                                        <View className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                            <Ionicons name="location-outline" size={16} color="#008378" />
                                        </View>
                                        <Text className="text-sm font-bold text-on-surface">Alamat Penjemputan</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Text className="text-xs font-bold text-primary px-1 py-0.5">Ubah</Text>
                                    </TouchableOpacity>
                                </View>

                                
                                <View className="relative rounded-2xl overflow-hidden h-24 bg-surface-container border border-outline-variant/30">
                                   <Image 
                                        source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC60NJpAtyHxJj4cn-SRwFim2_YiyaVPJ0DNRvho2gy2kBL-Zilv7WoqTLKhd68-3KbaNPvv1SNMK8bgPsAP9d9Tsf33dnGS1mepuhuAyOmbriR7jHAjSIIUZDap9IkQC3IKB8fPChR3yCakeFrO9ExuH7al0764JBq-0SSKWic_BjY4xxBLqrvSY14fWhUqW3i-krgdI4PbG7CsMR_-PoMRr71AvSmcBQ5S3dO6Ho'}}
                                        style={{width: '100%', height: '100%', position: 'absolute'}}
                                        resizeMode="cover"
                                    />
                                </View>

                                
                                <View className="flex flex-col gap-0.5">
                                    <Text className="text-xs font-bold text-on-surface">Jl. Senopati No. 42, RT 04 / RW 02</Text>
                                    <Text className="text-xs text-on-surface-variant">Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190</Text>
                                </View>

                                <View className="p-2.5 bg-surface-container-low rounded-2xl flex flex-row items-start gap-2 border border-outline-variant/20">
                                    <Ionicons name="information-circle-outline" size={16} color="#855300" style={{marginTop: 2}}/>
                                    <Text className="text-[11px] leading-relaxed text-on-surface-variant flex-1">
                                        <Text className="text-on-surface font-semibold">Catatan Sitter: </Text>
                                        Pagar hitam, bel di sebelah kanan. Aman untuk parkir motor atau mobil saat drop-off.
                                    </Text>
                                </View>
                            </View>

                            {/* Bagian untuk Pet */}
                            <View className="flex flex-col gap-2.5">                                
                                <View className="flex flex-row items-center justify-between px-1">
                                    <View className="flex flex-row items-center gap-2">
                                        <Text className="text-sm font-bold text-on-surface">Anabul Terdaftar</Text>
                                        <View className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                            <Text className="text-[10px] font-bold text-primary">2</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity className="flex flex-row items-center gap-1 px-2 py-1 rounded-full">
                                        <Ionicons name="add-circle-outline" size={15} color="#008378" />
                                        <Text className="text-xs text-primary font-bold">Tambah Anabul</Text>
                                    </TouchableOpacity>
                                </View>

                                <View className="flex flex-col gap-3">
                                    {/* Pet 1 */}
                                    <View className="bg-surface-container-lowest rounded p-3 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
                                        <View className="flex flex-row items-center gap-3">
                                            <View className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container shrink-0 relative">
                                                <Image 
                                                    source={{ uri: petsData[0].imageuri }} 
                                                    style={{ width: '100%', height: '100%', position: 'absolute'}} 
                                                    resizeMode="cover"
                                                />
                                            </View>
                                            
                                            <View className="flex flex-col min-w-0 flex-1">
                                                <View className="flex flex-row items-center gap-1">
                                                    <Text className="text-sm font-bold text-on-surface truncate">Milo</Text>
                                                    <View className="bg-surface-container-high px-2 py-0.5 rounded-full shrink-0">
                                                        <Text className="text-[10px] font-semibold text-on-surface-variant">♂️ Jantan</Text>
                                                    </View>
                                                </View>
                                                <Text className="text-xs text-on-surface-variant mt-0.5">Golden Retriever • 3 Thn (28 kg)</Text>
                                                
                                                <View className="flex flex-row flex-wrap gap-1 mt-1.5">
                                                    <View className="flex flex-row items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-full">
                                                        <Ionicons name="medical-outline" size={11} color="#008378" />
                                                        <Text className="text-[10px] font-semibold text-primary">Vaksin Lengkap</Text>
                                                    </View>
                                                    <View className="flex flex-row items-center gap-1 bg-amber-100 px-2 py-0.5 rounded-full">
                                                        <Ionicons name="happy-outline" size={11} color="#653e00" />
                                                        <Text className="text-[10px] font-semibold text-amber-800">Ramah Anak</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                        <View className="flex flex-row items-center justify-between pt-2 border-t border-outline-variant/20">
                                            <View className="flex flex-row items-center gap-1">
                                                <Ionicons name="walk-outline" size={15} color="#008378" />
                                                <Text className="text-[11px] text-on-surface-variant">Rutin Jalan Sore 3x/minggu</Text>
                                            </View>
                                            <TouchableOpacity className="flex flex-row items-center gap-0.5">
                                                <Text className="text-xs text-primary font-bold">Detail</Text>
                                                <Ionicons name="chevron-forward" size={14} color="#008378" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    {/* Pet 2 */}
                                    <View className="bg-surface-container-lowest rounded p-3 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
                                        <View className="flex flex-row items-center gap-3">
                                            <View className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container shrink-0 relative">
                                                <Image 
                                                    source={{uri: petsData[1].imageuri}} 
                                                    style={{width: '100%', height: '100%', position: 'absolute'}} 
                                                    resizeMode="cover" 
                                                />
                                            </View>

                                            <View className="flex flex-col min-w-0 flex-1">
                                                <View className="flex flex-row items-center gap-1">
                                                    <Text className="text-sm font-bold text-on-surface truncate">Luna</Text>
                                                    <View className="bg-surface-container-high px-2 py-0.5 rounded-full shrink-0">
                                                        <Text className="text-[10px] font-semibold text-on-surface-variant">♀️ Betina</Text>
                                                    </View>
                                                </View>
                                                <Text className="text-xs text-on-surface-variant mt-0.5">British Shorthair • 2 Thn (4.2 kg)</Text>

                                                <View className="flex flex-row flex-wrap gap-1 mt-1.5">
                                                    <View className="flex flex-row items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-full">
                                                        <Ionicons name="medical-outline" size={11} color="#008378" />
                                                        <Text className="text-[10px] font-semibold text-primary">Steril & Vaksin</Text>
                                                    </View>
                                                    <View className="flex flex-row items-center gap-1 bg-surface-container px-2 py-0.5 rounded-full">
                                                        <Ionicons name="time-outline" size={11} color="#4b5d6f" />
                                                        <Text className="text-[10px] font-semibold text-on-surface-variant">Butuh Adaptasi</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                        <View className="flex flex-row items-center justify-between pt-2 border-t border-outline-variant/20">
                                            <View className="flex flex-row items-center gap-1">
                                                <Ionicons name="home-outline" size={15} color="#855300" />
                                                <Text className="text-[11px] text-on-surface-variant">Kunjungan Saat Liburan</Text>
                                            </View>
                                            <TouchableOpacity className="flex flex-row items-center gap-0.5">
                                                <Text className="text-xs text-primary font-bold">Detail</Text>
                                                <Ionicons name="chevron-forward" size={14} color="#008378" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>

                        {/* Log Out----- */}
                        <View className="flex flex-col w-full items-center justify-center gap-1.5 pt-5 pb-6 text-center">
                            <TouchableOpacity onPress={() => router.replace('/')} className="flex flex-row w-full h-10 items-center justify-center gap-1 px-3 py-1.5 rounded-full bg-error/5 active:bg-error/10">
                                <Ionicons name="log-out-outline" size={16} color="#ba1a1a" />
                                <Text className="text-xs font-bold text-header-lg color-error">Keluar dari Akun</Text>
                            </TouchableOpacity>
                            <Text className="text-[10px] text-on-surface-variant/70">PetSitter NearMe v1.0.0</Text>
                        </View>
                    
                </View>


            </TouchableWithoutFeedback>

        </ScrollView>

        {/* Bottom Navbar */}
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

