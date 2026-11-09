import { Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { useEffect, useState } from "react";

import { useRouter } from "expo-router";

import { BackHandler } from 'react-native';



export default function index() {
    const [search, setSearch] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [activeTab, setActiveTab] = useState("Home"); //Default page yg aktif, kalo Profile, yaaa nanti jadi profile, kalo pesanan nanti jadi pesanan
    const [isVerticalScrollEnabled, setIsVerticalScrollEnabled] = useState(true);

    const router = useRouter();

    useEffect(() => 
        {
            const backAction = () => {
                return false;
            };
        
            const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
            return () => backHandler.remove();
        }, []);

  return (
    
    // View Utama
    <View className="flex-1">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false} directionalLockEnabled={true} 
          scrollEnabled={isVerticalScrollEnabled} className="">

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

               {/* View Body */}
                <View className="bg-background font-body-md text-on-surface flex flex-col min-h-screen">

                     {/* Location------------- */}
                    <View className="w-full bg-white pt-10 px-5 pb-3 border-b justify-center justify-between flex-row border-gray-200">
                        <View className="flex-row items-center space-x-4 gap-3">
                            <View className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <Ionicons name="location" size={20} color="#008378"/>
                            </View>
                            <View>
                                <Text className="text-[12px] font-normal text-gray-500">Lokasi Saat Ini</Text>
                                <Text numberOfLines={1} ellipsizeMode="tail" className="w-40 text-[15px] font-bold ">Pondok Gede, Bekasi</Text>
                            </View>
                        </View>

                        <View className="flex-row items-center space-x-4 gap-3">
                            <View>
                                <Ionicons name="notifications-outline" size={20} color="#008378"></Ionicons>
                            </View>

                            <TouchableOpacity onPress={() => router.replace('/')} className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <Ionicons name="person-sharp" size={20} color="#008378"></Ionicons>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* Ringkasan Profile-------------- */}
                    <View>
                        <Image 
                            source={{ uri: 'https://wallpapercave.com/wp/wp2777285.jpg' }}
                            resizeMode="cover"
                            className="absolute inset-0 w-full h-full" 
                        />

                        <View className="p-3">

                                <View className="w-full mb-3 justify-center bg-surface-container-low/70 border rounded p-2 items-center justify-between flex-row border-gray-200 flex-row justify-between">
                                    <View className="flex gap-1.5 ">
                                        <Text className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Hello, Maya!  👋</Text>
                                        <Text className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Siapa anabul yang butuh perhatian hari ini?</Text>
                                    </View>

                                    <View className="w-16 h-16 rounded-full  overflow-hidden shadow-sm bg-surface-container-high">
                                        <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6EuBP4mtvcRx2iE-c80-ISQo-SnB5AnK5Djifg4oWzIKBLxk3T12ZfqFFShGPX6gED4JuxRzKptxGO3HtDqcotiQRv2uNH8r5i2l-VVU5rd3tdbnvZWEO0AKaqCyYgt7kKbxciI26bqPnVON1mGTpHTSw4H6Ju3SeK0BskhOYFfgQagb3p58K4ima33zMF2TN1Yajddl_2P38aa5KM9vky_PnUJgtRhTZkmhVB4w'}} 
                                        style={{ width: '100%', height: '100%' }} 
                                        resizeMode="cover"></Image>
                                    </View>
                                </View>

                                {/* Daftar Anabul */}
                                <View className="gap-4 justify-center bg-surface-container-low/70 border border-white p-3 rounded">
                                    <View className="flex-row justify-between justify-center">
                                        <Text className="font-headline-md text-headline-md text-on-surface">Anabul Kesayanganmu ❤ </Text>
                                        <TouchableOpacity className="flex-row justify-center items-center w-20 bg-primary-container items-center rounded-full  text-primary shrink-0 transition-colors ">
                                            <Text className="text-[13px] color-white ">Details →</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View className="flex-row justify-between justify-center">
                                        <View className="flex items-center gap-2 p-2 rounded bg-on-primary-fixed/80 text-on-primary shadow-sm">
                                            <View className="w-full h-20  rounded overflow-hidden shadow-sm bg-surface-container-high">
                                                <Image source={require('../../assets/images/Sapi2.jpg')} style={{ width: '100%', height: '100%' }} resizeMode="cover"></Image>
                                            </View>
                                            <View className="flex flex-col text-left leading-tight">
                                                <Text className="font-label-md text-white text-label-md">Milo</Text>
                                                <Text className="font-label-sm text-white text-label-sm opacity-90">Golden Retriever</Text>
                                            </View>
                                        </View>
                                        <View className="flex items-center gap-2 p-2 rounded bg-on-primary-fixed/80 text-on-primary shadow-sm">
                                            <View className="w-full h-20  rounded overflow-hidden shadow-sm bg-surface-container-high">
                                                <Image source={require('../../assets/images/Sapi2.jpg')} style={{ width: '100%', height: '100%' }} resizeMode="cover"></Image>
                                            </View>
                                            <View className="flex flex-col text-left leading-tight">
                                                <Text className="font-label-md text-white text-label-md">Milo</Text>
                                                <Text className="font-label-sm text-white text-label-sm opacity-90">Golden Retriever</Text>
                                            </View>
                                        </View>
                                        <View className="flex items-center gap-2 p-2 rounded bg-on-primary-fixed/80 text-on-primary shadow-sm">
                                            <View className="w-full h-20  rounded overflow-hidden shadow-sm bg-surface-container-high">
                                                <Image source={require('../../assets/images/Sapi2.jpg')} style={{ width: '100%', height: '100%' }} resizeMode="cover"></Image>
                                            </View>
                                            <View className="flex flex-col text-left leading-tight">
                                                <Text className="font-label-md text-white text-label-md">Milo</Text>
                                                <Text className="font-label-sm text-white text-label-sm opacity-90">Golden Retriever</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                        </View>

                        
                        

                    </View>

                           
                    {/* Alarm --------------*/}
                    <View className="p-3">
                        <View className="h-22 w-full bg-tertiary-fixed-dim flex-row rounded my-5 justify-between items-center p-3">
                            <View className="w-16 h-16 bg-secondary-container items-center justify-center rounded">
                                <Ionicons name="alarm-outline" size={28} color="#3c3d3d"/>
                            </View>

                            <View>
                                <View className="flex-row justify-center items-center gap-2">
                                    <Text className="text-body-lg text-on-tertiary-fixed-variant font-extrabold ">JADWAL MENDATANG</Text>
                                    <Text className="text-body-sm text-on-surface-variant">12.00</Text>
                                </View>
                                <Text numberOfLines={1} ellipsizeMode="tail" className="text-body-sm">Milo -- Jalan Sore dengan Sarah</Text>
                            </View>

                            <View>
                                <Text className="text-label-lg text-on-tertiary-fixed-variant font-bold">Detail</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View className="p-3 justify-center relative">
                        <View className="flex-row px-3 border gap-2 items-center bg-surface-container-lowest h-12 rounded-full">
                            <Ionicons name="search-outline" size={28} color="#747474"/>
                            <TextInput
                                className="w-max-10 rounded-lg text-black text-[16px] flex-1"
                                placeholder="Cari nama sitter, lokasi, atau layanan"
                                placeholderTextColor="#1c1b1b76" 
                                value={search}
                                onChangeText={setSearch}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
                    </View>


                    {/* maps */}
                    <View className="px-4 mb-6">
                        <View className="flex-row items-center justify-between mb-3">
                            <View className="flex-row items-center gap-2">
                                <Text className="text-base font-bold text-on-surface tracking-tight">Sitter Aktif di Sekitarmu</Text>
                                <View className="flex-row items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                                    <View className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    <Text className="text-primary text-[11px] font-semibold">3 Online</Text>
                                </View>
                            </View>
                            <TouchableOpacity className="flex-row items-center gap-1">
                                <MaterialIcons name="map" size={16} color="#00685f" />
                                <Text className="text-xs font-bold text-primary">Perbesar Peta</Text>
                            </TouchableOpacity>
                        </View>


                        <View className="relative w-full h-52 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 bg-surface-container-low select-none">
                            

                            <View className="absolute inset-0 bg-[#eaf4eb] opacity-90 justify-center items-center">
                                <Image 
                                    source={require('../../assets/images/Maps.png')}
                                    resizeMode="cover"
                                    className="absolute inset-0 w-full h-full" 
                                />
                            </View>


                            <View className="absolute top-2.5 right-2.5 z-10 flex-col rounded-xl bg-surface-container-lowest/90 backdrop-blur-sm shadow-xs border border-outline-variant/40 overflow-hidden">
                                <TouchableOpacity aria-label="Perbesar" className="w-8 h-8 items-center justify-center text-on-surface">
                                    <MaterialIcons name="add" size={16} color="#0b1c30" />
                                </TouchableOpacity>
                                <View className="h-[1px] bg-outline-variant/30" />
                                <TouchableOpacity aria-label="Perkecil" className="w-8 h-8 items-center justify-center text-on-surface">
                                    <MaterialIcons name="remove" size={16} color="#0b1c30" />
                                </TouchableOpacity>
                            </View>


                            <View className="absolute left-[44%] top-[54%] -translate-x-1/2 -translate-y-1/2 z-10 items-center pointer-events-none">
                                <View className="relative items-center justify-center">
                                    <View className="w-6 h-6 rounded-full bg-primary ring-2 ring-white items-center justify-center shadow-md">
                                        <MaterialIcons name="person-pin" size={13} color="#ffffff" />
                                    </View>
                                </View>
                                <View className="mt-1 px-1.5 py-0.5 rounded-full bg-on-surface">
                                    <Text className="text-surface font-semibold text-[10px]">Kamu di sini</Text>
                                </View>
                            </View>


                            <TouchableOpacity className="absolute left-[24%] top-[26%] -translate-x-1/2 -translate-y-1/2 z-25 items-center active:scale-95">
                                <View className="relative items-center">
                                    <View className="w-9 h-9 rounded-full overflow-hidden p-0.5 bg-primary shadow-md border-2 border-white">
                                        <Image 
                                            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKFuPFZye5-FKfywmPhJOxbgK2yJaPseNkIxkVNCwHeBcm8E9X79LKYMvXEbLZGMqcTWEwPnssgNJoc30xKXn7Pfl9RSUZ4MGjVQ5uIvt-sGkrAHEqOxNMOzgzUs0xRRfUYJXunLSUM8I5zrRlNlJAvg2Go9HBHpnm3l82NUybqOrfNqjv-qnwXEWyQI6T9qI_7ndn7W-TKqLyxlTSRd3YbsqWo9absJf0y-pZd987K7mZwCf2Nm7u' }} 
                                            style={{ width: '100%', height: '100%' }}
                                            className="rounded-full"
                                            resizeMode="cover"
                                        />
                                    </View>
                                    <View className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-secondary items-center justify-center">
                                        <Text className="text-white text-[8px] font-bold">★</Text>
                                    </View>
                                </View>
                                <View className="mt-0.5 px-2 py-0.5 rounded-full bg-primary shadow-sm">
                                    <Text className="text-[10px] font-bold text-white">75rb · 0.8km</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity className="absolute left-[76%] top-[34%] -translate-x-1/2 -translate-y-1/2 z-20 items-center active:scale-95">
                                <View className="relative items-center">
                                    <View className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-white shadow-md border border-primary/40">
                                        <Image 
                                            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDowJGvGUPKYliZ8zAmsLljDA5LHo-Lfyhl6rIHAW_DiotfB9uRU5ekvEyeR7CBbCoZL9VOHivUtNfXhiCEUtDmIPMulqz7qbPvKL4PuFqO0kpgNuEK_c_l30CIWRAhPBgh4m6lhqynuOc1cWuChqVXFACvbQyB9H0XT3Pdzu65r56GRju9t3mro-I0eu9gpk53m7tSUsTv-0DPitbz0Ql1zV4xyyZ5NFjXtau4bZSSNLNr0emd_2SM' }} 
                                            style={{ width: '100%', height: '100%' }}
                                            className="rounded-full"
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <View className="mt-0.5 px-1.5 py-0.5 rounded-full bg-white shadow-xs">
                                    <Text className="text-[10px] font-semibold text-on-surface">50rb · 1.4km</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity className="absolute left-[82%] top-[72%] -translate-x-1/2 -translate-y-1/2 z-10 items-center active:scale-95">
                                <View className="w-7 h-7 rounded-full bg-secondary-container ring-2 ring-white shadow-sm items-center justify-center">
                                    <MaterialIcons name="pets" size={15} color="#2a1700" />
                                </View>
                                <View className="mt-0.5 px-1.5 py-0.5 rounded-full bg-white/90 shadow-xs">
                                    <Text className="text-[9px] font-semibold text-on-surface">60rb · 1.9km</Text>
                                </View>
                            </TouchableOpacity>


                            <View className="absolute bottom-2 left-2 right-2 z-30">
                                <View className="bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-2 px-3 shadow-md flex-row items-center justify-between gap-2 border border-outline-variant/30">
                                    <View className="flex-row items-center gap-2 flex-1 min-w-0">
                                        <View className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-primary/30">
                                            <Image 
                                                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKFuPFZye5-FKfywmPhJOxbgK2yJaPseNkIxkVNCwHeBcm8E9X79LKYMvXEbLZGMqcTWEwPnssgNJoc30xKXn7Pfl9RSUZ4MGjVQ5uIvt-sGkrAHEqOxNMOzgzUs0xRRfUYJXunLSUM8I5zrRlNlJAvg2Go9HBHpnm3l82NUybqOrfNqjv-qnwXEWyQI6T9qI_7ndn7W-TKqLyxlTSRd3YbsqWo9absJf0y-pZd987K7mZwCf2Nm7u' }} 
                                                style={{ width: '100%', height: '100%' }}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View className="flex-1 min-w-0">
                                            <View className="flex-row items-center gap-1.5">
                                                <Text className="text-[13px] font-bold text-on-surface truncate">Sarah Amanda</Text>
                                                <Text className="text-[11px] text-secondary font-bold">⭐ 4.9</Text>
                                            </View>
                                            <Text className="text-[11px] text-on-surface-variant truncate">0.8 km · Rp 75rb/hari</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity className="px-3 py-1 rounded-full bg-primary shrink-0 active:scale-95 flex-row items-center gap-0.5 shadow-xs">
                                        <Text className="text-on-primary text-xs font-bold">Lihat</Text>
                                        <MaterialIcons name="chevron-right" size={13} color="#ffffff" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>


                    {/* Rekomendasi Sitter */}
                    <View className="px-4 mb-6">
                        <View className="flex-row items-baseline justify-between mb-3">
                            <Text className="text-base font-bold text-on-surface tracking-tight">Rekomendasi Teratas</Text>
                            <Text className="text-xs font-semibold text-primary">Lihat 18 Sitter</Text>
                        </View>

                        <View className="gap-3.5">

                            {/* Sitter 1 */}
                            <View className="bg-surface-container-lowest rounded-2xl p-3.5 border border-outline-variant/50 shadow-sm">
                                <View className="flex-row items-start gap-3">
                                    <Image 
                                        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKFuPFZye5-FKfywmPhJOxbgK2yJaPseNkIxkVNCwHeBcm8E9X79LKYMvXEbLZGMqcTWEwPnssgNJoc30xKXn7Pfl9RSUZ4MGjVQ5uIvt-sGkrAHEqOxNMOzgzUs0xRRfUYJXunLSUM8I5zrRlNlJAvg2Go9HBHpnm3l82NUybqOrfNqjv-qnwXEWyQI6T9qI_7ndn7W-TKqLyxlTSRd3YbsqWo9absJf0y-pZd987K7mZwCf2Nm7u' }} 
                                        style={{ width: 64, height: 64 }}
                                        className="rounded-xl shrink-0"
                                        resizeMode="cover"
                                    />
                                    <View className="flex-1 min-w-0">
                                        <View className="flex-row items-start justify-between gap-1">
                                            <View className="flex-row items-center gap-1 flex-1 min-w-0">
                                                <Text className="text-sm font-bold text-on-surface truncate">Sarah Amanda</Text>
                                                <MaterialIcons name="verified" size={15} color="#00685f" />
                                            </View>
                                            <View className="flex-row items-center gap-0.5 shrink-0">
                                                <MaterialIcons name="star" size={14} color="#855300" />
                                                <Text className="text-xs font-bold text-on-surface">4.9</Text>
                                                <Text className="text-on-surface-variant text-[11px]">(128)</Text>
                                            </View>
                                        </View>
                                        <Text className="text-xs text-on-surface-variant mt-0.5" numberOfLines={1}>5 thn pengalaman · Rumah berhalaman aman</Text>
                                        
                                        <View className="flex-row items-center gap-1.5 mt-2 flex-wrap">
                                            <View className="flex-row items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-md">
                                                <MaterialIcons name="location-on" size={13} color="#00685f" />
                                                <Text className="text-[11px] text-on-surface-variant font-medium">0.8 km · Pondok Gede</Text>
                                            </View>
                                            <View className="bg-surface-container-low px-2 py-0.5 rounded-md">
                                                <Text className="text-[11px] text-on-surface-variant font-medium">Update Foto/Video</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View className="h-[1px] bg-outline-variant/40 my-3" />

                                <View className="flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[10px] text-on-surface-variant font-medium">Tarif harian</Text>
                                        <View className="flex-row items-baseline gap-1">
                                            <Text className="text-base font-bold text-on-surface">Rp 75.000</Text>
                                            <Text className="text-xs text-on-surface-variant">/ hari</Text>
                                        </View>
                                    </View>
                                    <View className="flex-row items-center gap-2">
                                        <TouchableOpacity className="w-9 h-9 rounded-xl border border-outline-variant/60 items-center justify-center">
                                            <Ionicons name="chatbubble-outline" size={18} color="#0b1c30" />
                                        </TouchableOpacity>
                                        <TouchableOpacity className="px-4 py-2 rounded-xl bg-primary active:scale-95">
                                            <Text className="text-on-primary font-bold text-xs">Reservasi</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            {/* Sitter 2 */}
                            <View className="bg-surface-container-lowest rounded-2xl p-3.5 border border-outline-variant/50 shadow-sm">
                                <View className="flex-row items-start gap-3">
                                    <Image 
                                        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDowJGvGUPKYliZ8zAmsLljDA5LHo-Lfyhl6rIHAW_DiotfB9uRU5ekvEyeR7CBbCoZL9VOHivUtNfXhiCEUtDmIPMulqz7qbPvKL4PuFqO0kpgNuEK_c_l30CIWRAhPBgh4m6lhqynuOc1cWuChqVXFACvbQyB9H0XT3Pdzu65r56GRju9t3mro-I0eu9gpk53m7tSUsTv-0DPitbz0Ql1zV4xyyZ5NFjXtau4bZSSNLNr0emd_2SM' }} 
                                        style={{ width: 64, height: 64 }}
                                        className="rounded-xl shrink-0"
                                        resizeMode="cover"
                                    />
                                    <View className="flex-1 min-w-0">
                                        <View className="flex-row items-start justify-between gap-1">
                                            <View className="flex-row items-center gap-1 flex-1 min-w-0">
                                                <Text className="text-sm font-bold text-on-surface truncate">Budi Pratama</Text>
                                                <MaterialIcons name="verified" size={15} color="#00685f" />
                                            </View>
                                            <View className="flex-row items-center gap-0.5 shrink-0">
                                                <MaterialIcons name="star" size={14} color="#855300" />
                                                <Text className="text-xs font-bold text-on-surface">4.8</Text>
                                                <Text className="text-on-surface-variant text-[11px]">(94)</Text>
                                            </View>
                                        </View>
                                        <Text className="text-xs text-on-surface-variant mt-0.5" numberOfLines={1}>Spesialis kucing senior & rawat berkala</Text>
                                        
                                        <View className="flex-row items-center gap-1.5 mt-2 flex-wrap">
                                            <View className="flex-row items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-md">
                                                <MaterialIcons name="location-on" size={13} color="#00685f" />
                                                <Text className="text-[11px] text-on-surface-variant font-medium">1.4 km · Senopati</Text>
                                            </View>
                                            <View className="bg-surface-container-low px-2 py-0.5 rounded-md">
                                                <Text className="text-[11px] text-on-surface-variant font-medium">Beri Makan & Obat</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View className="h-[1px] bg-outline-variant/40 my-3" />

                                <View className="flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[10px] text-on-surface-variant font-medium">Tarif kunjungan</Text>
                                        <View className="flex-row items-baseline gap-1">
                                            <Text className="text-base font-bold text-on-surface">Rp 50.000</Text>
                                            <Text className="text-xs text-on-surface-variant">/ kunjungan</Text>
                                        </View>
                                    </View>
                                    <View className="flex-row items-center gap-2">
                                        <TouchableOpacity className="w-9 h-9 rounded-xl border border-outline-variant/60 items-center justify-center">
                                            <Ionicons name="chatbubble-outline" size={18} color="#0b1c30" />
                                        </TouchableOpacity>
                                        <TouchableOpacity className="px-4 py-2 rounded-xl bg-primary active:scale-95">
                                            <Text className="text-on-primary font-bold text-xs">Reservasi</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Panduan Pemilik Anabul */}
                    <View className="px-4 mb-8">
                        <View className="flex-row items-baseline justify-between mb-3">
                            <Text className="text-base font-bold text-on-surface tracking-tight">Panduan Untuk Pemilik Anabul</Text>
                            <Text className="text-xs font-semibold text-primary">Artikel Lainnya</Text>
                        </View>

                        <View className="flex-row gap-3">

                            <TouchableOpacity className="flex-1 bg-surface-container-lowest rounded-2xl p-2.5 border border-outline-variant/50 shadow-sm">
                                <View className="w-full h-24 rounded-xl overflow-hidden mb-2 bg-surface-container-low">
                                    <Image 
                                        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE5XlSTEBmhxb10gchrVh9pHKIBxYjXZEesVFLjpEKJCla88umRhRHh2jgljJZ3FxvHDLtErYVUYx4MyfbIZhEwiUG7JN_vgficxLe6m8sCIOkoFQVzkMDfS-YhFvPIGrGXBhlo5UvhZE0LKBqzg_lgIsXzkAEbYti8Ai0CNUDNWl6b_bV0HkWQpESpWxE0wzPW66rVF9MAKRS6YP5Egv_qd9SSbZV51H_A0K9kyTAtWpw0TVuhfEi' }} 
                                        style={{ width: '100%', height: '100%' }}
                                        resizeMode="cover"
                                    />
                                </View>
                                <Text className="text-[11px] font-semibold text-on-surface-variant mb-0.5">3 mnt baca</Text>
                                <Text className="text-xs font-bold text-on-surface" numberOfLines={2}>Tanda Anabul Nyaman Bersama Pet Sitter Baru</Text>
                            </TouchableOpacity>


                            <TouchableOpacity className="flex-1 bg-surface-container-lowest rounded-2xl p-2.5 border border-outline-variant/50 shadow-sm">
                                <View className="w-full h-24 rounded-xl overflow-hidden mb-2 bg-surface-container-low">
                                    <Image 
                                        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAscplAEz2zr5RZz96CbiU7zUqBrkoInp5FU20c9oIiB85B4oUXpfgrp1OG5ROCoM_pNKjziXEiWR13idagHOoXxLRcFbJU9jzu5g6nqA-yab-ceNdCv_YuRJTiTwHi5ztgG4AEPqoO9vu3e9tcWMDn2bpjHMSRjbfF1chT_KNtUkBotsgTRL0stvgqCeyJC8EPblPryC--bcdqoe8SZaAxGZl-4L_g2-LXf4sMsEE5ySvLJMZJtHor' }} 
                                        style={{ width: '100%', height: '100%' }}
                                        resizeMode="cover"
                                    />
                                </View>
                                <Text className="text-[11px] font-semibold text-on-surface-variant mb-0.5">Daftar periksa</Text>
                                <Text className="text-xs font-bold text-on-surface" numberOfLines={2}>Checklist Makanan & Obat Sebelum Dititipkan</Text>
                            </TouchableOpacity>
                        </View>
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
                    onPress={() => {setActiveTab('Profile'); router.replace('/profile');}} 
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



