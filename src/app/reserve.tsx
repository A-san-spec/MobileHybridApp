import { Ionicons } from '@expo/vector-icons';
import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { BackHandler, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { petsData, sitterData } from './data';

export default function BookingSitterScreen() {
	const router = useRouter();
	const segments = useSegments();

	useEffect(() => {
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
		<View className="flex-1 bg-surface pt-8">
			{/* Back button & Title page-----*/}
			<View className="h-14 px-4 flex-row items-center justify-between border-b border-outline-variant/20 bg-surface">
				<TouchableOpacity onPress={() => router.replace('/home')} className="w-10 h-10 rounded-full flex items-center justify-center">
					<Ionicons name="arrow-back" size={24} color="#0b1c30" />
				</TouchableOpacity>
				<View className="flex-col items-center">
					<Text className="text-base font-bold text-on-surface">Pemesanan Sitter</Text>
					<View className="flex-row items-center gap-1">
						<View className="w-1.5 h-1.5 rounded-full bg-primary" />
						<Text className="text-[10px] font-bold text-on-surface-variant uppercase">Langkah Pemesanan</Text>
					</View>
				</View>
				<View className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
					<Ionicons name="person" size={18} color="#ffffff" />
				</View>
			</View>

			<ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
				{/* PetSitter Profile ------*/}
				<View className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm mb-4">
					<View className="flex-row items-center gap-3.5">
						<View className="relative">
							<Image 
								source={{ uri: sitterData[0].imageuri }} 
								className="w-16 h-16 rounded-full"
							/>
						</View>
						<View className="flex-1 min-w-0">
							<View className="flex-row items-center justify-between">
								<Text className="text-base font-bold text-on-surface">{sitterData[0].name}</Text>
								<View className="flex-row items-center gap-1 bg-amber-100 px-2 py-0.5 rounded-full">
									<Ionicons name="star" size={12} color="#b45309" />
									<Text className="text-xs font-bold text-amber-800">{sitterData[0].rating} ({sitterData[0].reviewsCount})</Text>
								</View>
							</View>
							<Text className="text-xs text-on-surface-variant mt-0.5">{sitterData[0].role}</Text>
							<View className="flex-row items-center gap-1 mt-1">
								<Ionicons name="location" size={12} color="#00685f" />
								<Text className="text-[11px] font-semibold text-primary">{sitterData[0].distance}</Text>
							</View>
						</View>
					</View>

					<View className="flex-row flex-wrap gap-1.5 pt-3">
						<View className="flex-row items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container">
							<Ionicons name="medical" size={13} color="#00685f" />
							<Text className="text-[11px] font-medium text-on-surface-variant">Sertifikat P3K Anabul</Text>
						</View>
						<View className="flex-row items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container">
							<Ionicons name="paw" size={13} color="#00685f" />
							<Text className="text-[11px] font-medium text-on-surface-variant">Pakar Anjing Besar & Kucing</Text>
						</View>
					</View>
				</View>

				{/* Pilih pet -------*/}
				<View className="mb-4">
					<View className="flex-row items-center justify-between mb-2">
						<View>
							<Text className="text-base font-bold text-on-surface">Pilih Anabul</Text>
							<Text className="text-xs text-on-surface-variant">Siapa saja yang akan dititipkan?</Text>
						</View>
						<View className="px-2.5 py-0.5 rounded-full bg-primary/10">
							<Text className="text-[11px] font-bold text-primary">
								2 Dipilih
							</Text>
						</View>
					</View>

					{/* pet1 Milo */}
					<View className="rounded-2xl p-3.5 mb-2.5 flex-row items-center justify-between border-2 bg-surface-container-lowest border-primary shadow-sm">
						<View className="flex-row items-center gap-3 flex-1">
							<Image source={{uri: petsData[0].imageuri}} className="w-14 h-14 rounded-xl" />
							<View className="flex-1">
								<View className="flex-row items-center gap-1.5">
									<Text className="text-sm font-bold text-on-surface">{petsData[0].name}</Text>
									<View className="bg-teal-100 px-1.5 py-0.5 rounded">
										<Text className="text-[10px] font-bold text-teal-800">{petsData[0].category}</Text>
									</View>
								</View>

								<Text className="text-xs text-on-surface-variant mt-0.5">{petsData[0].breed} · {petsData[0].weight}</Text>
								<Text className="text-[11px] mt-0.5 font-medium text-primary">
									✓ Penitipan Rp 75.000 / hari
								</Text>
							</View>
						</View>
						<View className="w-6 h-6 rounded-full items-center justify-center bg-primary">
							<Ionicons name="checkmark" size={16} color="#ffffff" />
						</View>
					</View>

					{/* pet 2 Luna */}
					<View className="rounded-2xl p-3.5 flex-row items-center justify-between border-2 bg-surface-container-lowest border-primary shadow-sm">
						<View className="flex-row items-center gap-3 flex-1">
							<Image source={{uri: petsData[1].imageuri}} className="w-14 h-14 rounded-xl" />
							<View className="flex-1">
								<View className="flex-row items-center gap-1.5">
									<Text className="text-sm font-bold text-on-surface">{petsData[1].name}</Text>
									<View className="bg-teal-100 px-1.5 py-0.5 rounded">
										<Text className="text-[10px] font-bold text-teal-800">{petsData[1].category}</Text>
									</View>
								</View>

								<Text className="text-xs text-on-surface-variant mt-0.5">{petsData[1].breed} · {petsData[1].weight}</Text>
								<Text className="text-[11px] mt-0.5 font-medium text-primary">
									✓ Penitipan Rp 75.000 / hari
								</Text>
							</View>
						</View>

						<View className="w-6 h-6 rounded-full items-center justify-center bg-primary">
							<Ionicons name="checkmark" size={16} color="#ffffff" />
						</View>
					</View>
				</View>

				{/* Penjelasan layanan ------------*/}
				<View className="mb-4">
					<Text className="text-base font-bold text-on-surface mb-2">Layanan & Jadwal</Text>
					
					<View className="bg-surface-container-lowest border border-primary rounded-2xl p-4 shadow-sm mb-3">
						<View className="flex-row items-start justify-between gap-3 mb-3">
							<View className="flex-row items-center gap-3 flex-1">
								<View className="w-12 h-12 rounded-xl bg-primary/10 items-center justify-center">
									<Ionicons name="home" size={24} color="#00685f" />
								</View>

								<View className="flex-1">
									<View className="flex-row items-center gap-2 flex-wrap">
										<Text className="text-sm font-bold text-on-surface">Penitipan Anabul (Boarding 24 Jam)</Text>
										<View className="bg-teal-100 px-2 py-0.5 rounded-full">
											<Text className="text-[10px] font-bold text-teal-900">Layanan Utama</Text>
										</View>
									</View>
									<Text className="text-xs text-on-surface-variant mt-0.5">Rp 75.000 / anabul / hari</Text>
								</View>
							</View>
						</View>

						<View className="pt-3 border-t border-outline-variant/20 flex-row flex-wrap gap-y-2">
							<View className="w-1/2 flex-row items-center gap-1.5">
								<Ionicons name="snow" size={13} color="#00685f" />
								<Text className="text-[11px] text-on-surface-variant">Kamar ber-AC sejuk</Text>
							</View>

							<View className="w-1/2 flex-row items-center gap-1.5">
								<Ionicons name="videocam" size={13} color="#00685f" />
								<Text className="text-[11px] text-on-surface-variant">Pengawasan 24/7</Text>
							</View>

							<View className="w-1/2 flex-row items-center gap-1.5">
								<Ionicons name="football" size={13} color="#00685f" />
								<Text className="text-[11px] text-on-surface-variant">Area bermain indoor</Text>
							</View>

							<View className="w-1/2 flex-row items-center gap-1.5">
								<Ionicons name="restaurant" size={13} color="#00685f" />
								<Text className="text-[11px] text-on-surface-variant">Makan & minum teratur</Text>
							</View>
						</View>
					</View>

					{/* Booking ----------------*/}
					<View className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm">
						<View className="flex-row items-center justify-between mb-2">
							<View className="flex-row items-center gap-2">
								<Ionicons name="calendar" size={16} color="#00685f" />
								<Text className="text-sm font-bold text-on-surface">Jadwal Penitipan (Check-in & Check-out)</Text>
							</View>
						</View>

						<View className="p-3.5 mb-3">
							<View className="flex-row justify-between mb-5">
								<View>
									<Text className="text-[11px] text-on-surface-variant">Check-in</Text>
									<Text className="text-xs font-bold text-on-surface">Kam, 24 Okt 2024</Text>
									<Text className="text-xs font-bold text-primary">09:00 WIB</Text>
								</View>
								<View className="pl-4 border-l border-outline-variant/30">
									<Text className="text-[11px] text-on-surface-variant">Check-out</Text>
									<Text className="text-xs font-bold text-on-surface">Sab, 26 Okt 2024</Text>
									<Text className="text-xs font-bold text-primary">17:00 WIB</Text>
								</View>
							</View>
							
							<View className="items-center">
								<View className="bg-teal-100 px-3 py-1 rounded-full">
									<Text className="text-[11px] font-bold text-teal-900">
										Durasi: 3 Hari (2 Malam)
									</Text>
								</View>
							</View>
						</View>

						{/* Booking hari------------- */}
						<View className="flex-row items-center justify-between">
							<Text className="text-[11px] text-on-surface-variant">Durasi cepat:</Text>
							<View className="flex-row gap-1">
								<View className="px-2.5 py-1 rounded-lg bg-surface-container">
									<Text className="text-[11px] font-semibold text-on-surface">1 Hari</Text>
								</View>
								<View className="px-2.5 py-1 rounded-lg bg-surface-container">
									<Text className="text-[11px] font-semibold text-on-surface">2 Hari</Text>
								</View>
								<View className="px-2.5 py-1 rounded-lg bg-primary">
									<Text className="text-[11px] font-semibold text-white">3 Hari</Text>
								</View>
								<View className="px-2.5 py-1 rounded-lg bg-surface-container">
									<Text className="text-[11px] font-semibold text-on-surface">5 Hari</Text>
								</View>
								<View className="px-2.5 py-1 rounded-lg bg-surface-container">
									<Text className="text-[11px] font-semibold text-on-surface">7 Hari</Text>
								</View>
							</View>
						</View>
					</View>
				</View>

				{/* Lokasi petSitter */}
				<View className="mb-4">
					<Text className="text-base font-bold text-on-surface mb-2">Lokasi PetSitter</Text>
					
					<View className="bg-surface-container-lowest border border-primary p-4 rounded-2xl shadow-sm">
						<View className="flex-row items-start justify-between gap-3 mb-3">
							<View className="flex-row items-center gap-3 flex-1">
								<View className="w-10 h-10 rounded-xl bg-primary/10 items-center justify-center">
									<Ionicons name="storefront" size={22} color="#00685f" />
								</View>

								<View className="flex-1">
									<View className="flex-row items-center gap-2">
										<Text className="text-sm font-bold text-on-surface">Antar ke Tempat Sitter</Text>

										<View className="bg-surface-container px-2 py-0.5 rounded-full">
											<Text className="text-[10px] font-bold text-primary">Gratis</Text>
										</View>
									</View>

									<Text className="text-xs text-on-surface-variant mt-0.5">Sitter siap menyambut kedatangan kamu & anabul.</Text>
								</View>
							</View>
						</View>

						<View className="p-3 bg-surface-container-low flex-row items-start gap-3">
							<Ionicons name="location" size={20} color="#00685f" style={{ marginTop: 2 }} />
							<View className="flex-1">
								<Text className="text-xs font-semibold text-on-surface">Rumah Sitter Sarah Amanda</Text>
								<Text className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">Jl. Suryo No. 28, Kebayoran Baru, Jakarta Selatan (0.8 km dari lokasimu)</Text>
								
								<View className="mt-2.5">
									<View className="self-start flex-row items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary shadow-sm">
										<Ionicons name="navigate" size={14} color="#ffffff" />
										<Text className="text-[11px] font-semibold text-white">Buka Peta / Petunjuk Arah</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>

				{/* Notes untuk pet sitter-------------------- */}
				<View className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm mb-4">
					<View className="flex-row items-center gap-2.5 mb-3">
						<View className="w-9 h-9 rounded-xl bg-primary/10 items-center justify-center">
							<Ionicons name="document-text" size={20} color="#00685f" />
						</View>

						<View className="flex-1">
							<Text className="text-sm font-bold text-on-surface">Instruksi Khusus Milo & Luna </Text>

							<Text className="text-xs text-on-surface-variant">Bantu Sarah merawat anabul selama masa penitipan</Text>
						</View>
					</View>

					<View className="bg-surface-container-low p-3">
						<Text className="text-xs text-on-surface leading-relaxed">
							Milo makan kibble 2x sehari (pagi & sore). Bawa mainan favorit karet tulang dan vitamin sendi setiap sarapan pagi. Takut suara petir mendadak. Luna menyukai tempat tidur dekat jendela.
						</Text>
					</View>
				</View>

				{/* Total Bayar -------- */}
				<View className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm mb-24">
					<Text className="text-base font-bold text-on-surface mb-3">Rincian Pembayaran</Text>
					
					<View className="flex-row justify-between mb-2">
						<Text className="text-xs text-on-surface-variant">Penitipan Milo (3 Hari x Rp 75.000)</Text>
						<Text className="text-xs font-bold text-on-surface">Rp 225.000</Text>
					</View>

					<View className="flex-row justify-between mb-2">
						<Text className="text-xs text-on-surface-variant">Penitipan Luna (3 Hari x Rp 75.000)</Text>
						<Text className="text-xs font-bold text-on-surface">Rp 225.000</Text>
					</View>

					<View className="flex-row justify-between mb-2">
						<Text className="text-xs text-on-surface-variant">Metode: Antar Sendiri ke Tempat Sitter</Text>
						<Text className="text-xs font-bold text-primary">Gratis</Text>
					</View>

					<View className="flex-row justify-between mb-2">
						<Text className="text-xs text-on-surface-variant">Garansi Medis & Asuransi</Text>
						<Text className="text-xs font-bold text-on-surface">Rp 15.000</Text>
					</View>

					<View className="flex-row justify-between mb-3">
						<Text className="text-xs text-primary">Diskon Pengguna Setia (PROMOHEMAT)</Text>
						<Text className="text-xs font-bold text-primary">-Rp 25.000</Text>
					</View>

					<View className="flex-row justify-between items-center pt-3 border-t border-outline-variant/20">
						<Text className="font-bold text-on-surface">Total Akhir</Text>
						<Text className="text-lg font-bold text-primary">Rp 440.000</Text>
					</View>
				</View>
			</ScrollView>

			{/* Bottom bar untuk total pembayaran dan menuju bayar --- */}
			<View className="absolute bottom-0 left-0 right-0 bg-surface/90 border-t border-surface-container/60 p-4 flex-row items-center justify-between">
				<View>
					<Text className="text-xs text-on-surface-variant">Total Estimasi</Text>
					<Text className="text-lg font-bold text-primary">Rp 440.000</Text>
				</View>
				
				<TouchableOpacity 
					className="h-12 px-6 rounded-full flex-row items-center justify-center gap-2 bg-primary"
				>
					<Ionicons name="paw" size={18} color="#ffffff" />
					<Text className="text-sm font-bold text-white">Konfirmasi Pesanan</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}