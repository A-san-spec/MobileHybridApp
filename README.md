
# Jawaban UTS

## 1. React Native

React Native adalah sebuah framework yang dibuat untuk build sebuah aplikasi seluler lintas platform seperti Android, IOS, dll. dengan menggunakan JavaScript dan React. React native menggunakan 2 thread Utama, yaitu

- **JavaScript** : Tempat di mana pengaplikasian code logic apps, state dan komponen react dibuat.

- **Native** : sebuah thread yg bisa menjalankan elemen UI yg disesuaikan dengan system operasi Android atau IOS sehingga code bisa membuat code untuk menciptakan UI dan memakai sifat - sifat/Komponen - komponen OS mobile agar sesuai dengan tujuan kita.

---

## 2. Keunggulan untuk apps hybrid

a. Bisa dipake code nya sama sama baik untuk android atau IOS karena basic code nya pake logic dan kalo ada yang beda - beda sedikit bisa pakai library khusus OS tersebut

b. UX akan lebih nyaman karena menggunakan komponen langsung dari system HP. Baik itu dari bentuk tombol, responsivitas touch, sampai animasi untuk pindah layer itu menggunakan system pengolahan UI resmi dari OS HP masing masing.

c. Banyak sekali library ready to use dari react & community pengguna react native, seperti react, expo, dan nativewind yg bisa digabungkan dengan logic code yg memudahkan sekali bagi developer untuk mengembangkan apps.

---

## 3. Komponen, props, State, Navigasi

### Components

- Components : Blok - blok yg digunakan untuk memisahkan antar section atau division atau elemen di dalam apps(<View><View>), dan juga sebagai sebuah elemen yg bisa melakukan tugas spesifik seperti input khusus text (<Text></Text>), untuk tombol (TouchableOpacity), masukkin gambar (<Image></Image>), dll. Yg berfungsi sebagai dasar untuk membangun UI dan UX dari sebuah apps.

**Contoh :**

```jsx
<View className="flex-row items-center justify-center mt-20 mb-10">
       <Text className="text-[16px] text-[#1c1b1b76]">Belum punya akun? </Text>

       <TouchableOpacity onPress={() => router.replace('/register')}>
             <Text className="text-secondary-container font-bold text-[16px]">Daftar Sekarang</Text>
       </TouchableOpacity>
</View>
```

```jsx
<Image 
   source={{ uri: 'https://wallpapercave.com/wp/wp2777285.jpg' }}
   resizeMode="cover"
   className="absolute inset-0 w-full h-full" 
/>
```

---

### Props

- Props : Sebuah mekanisme untuk mengambil komponen dari komponen parent ke komponen child yg gak bisa diubah oleh komponen penerima

**Contoh :** Belum dipakai

---

### State

- State : Data internal yg bersifat dinamis dan dapat diubah berdasarkan interaksi dan keperluan user. Sehingga perubahan ini bisa memicu re-render sebuah komponen.

**Contoh :**

```jsx
const [username, setUsername] = useState("");

<TextInput
    className={`${styles.input} ${isUsernameFocused ? 'border-2 border-[#6bd8cb]' : ''}`}
    placeholder="Username"
    placeholderTextColor="#1c1b1b76" 
    value={username} <----------------------- ini contoh pake state
    onChangeText={setUsername}
    autoCapitalize="none"
    autoCorrect={false}
    onFocus={() => setIsUsernameFocused(true)}  
    onBlur={() => setIsUsernameFocused(false)}
/>
```

---

### Navigation

- Navigation : UI & sistem yg berfungsi untuk perpindahan antar-layar untuk sebuah apps.

**Contoh :**

```jsx
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
```

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
==========================================================================================================================================================================================
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Analisis Kebutuhan

## A. Masalah

1. **Kekhawatiran Pemilik Hewan**

   Pemilik hewan peliharaan sering merasa khawatir ketika harus meninggalkan hewan kesayangannya, terutama saat bekerja atau bepergian ke luar kota. Menemukan tempat penitipan yang aman dan benar-benar bisa dipercaya pun bukan hal yang mudah.

2. **Kurangnya Transparansi Biaya dan Informasi**

   Tidak semua tempat penitipan memberikan informasi yang jelas mengenai fasilitas, jaminan keamanan, maupun rincian biaya yang harus dibayarkan. Hal ini membuat pemilik hewan terkadang kesulitan untuk memperkirakan total pengeluaran sejak awal.

## B. Target Pengguna

1. **Pemilik Hewan Peliharaan (Pet Owners)**

   Pekerja kantoran, mahasiswa, atau keluarga yang membutuhkan layanan penitipan hewan sementara dengan penanganan profesional.

2. **Penyedia Jasa Penitipan (Pet Sitters)**

   Pengasuh hewan mandiri atau pemilik tempat penitipan hewan di wilayah perkotaan.


## C. Kebutuhan Pengguna

1. **Otentikasi Pengguna**
Pengguna bisa membuat akun baru dan login ke aplikasi dengan menggunakan email serta nomor WhatsApp sebagai informasi akun.

2. **Pemilihan Profil Hewan Peliharaan**
Pengguna dapat memilih hewan peliharaan yang ingin dititipkan, baik anjing maupun kucing, berdasarkan profil hewan yang sudah terdaftar di aplikasi. Pengguna juga bisa memilih lebih dari satu hewan dalam satu kali pemesanan.

3. **Penentuan Durasi Penitipan**
Pengguna dapat menentukan berapa lama hewan akan dititipkan. Aplikasi juga menampilkan perkiraan tanggal check-in dan check-out sesuai dengan durasi yang dipilih.

4. **Instruksi Perawatan Khusus**
Pengguna dapat menambahkan catatan mengenai kebutuhan hewan selama dititipkan, seperti jenis makanan, jadwal pemberian obat, alergi, maupun kebiasaan tertentu agar sitter bisa memberikan perawatan yang sesuai.

5. **Kalkulasi Biaya Transparan**
Sebelum menyelesaikan pemesanan, pengguna dapat melihat rincian biaya yang perlu dibayar, mulai dari biaya penitipan per hari, potongan harga jika ada promo, hingga biaya garansi asuransi. Dengan begitu, pengguna bisa mengetahui total pembayaran sejak awal.

6. **Informasi Lokasi dan Navigasi**
Pengguna dapat melihat alamat lengkap tempat penitipan hewan dan menggunakan fitur navigasi yang terhubung dengan aplikasi peta untuk membantu menemukan lokasi dengan lebih mudah.

---

## D. Pemetaan Kebutuhan Pengguna ke Desain UI

| No | Kebutuhan Pengguna        | Layar (Screen)            | Komponen UI                                                          |
|----|---------------------------|---------------------------|----------------------------------------------------------------------|
| 1 | Pendaftaran & Masuk Akun   | `index.tsx` (Autentikasi) | Form Input Email & WhatsApp, Button Registrasi, Handler AsyncStorage |
| 2 | Kredibilitas Sitter        | `reserve.tsx` (Pemesanan) | SitterProfileCard (Foto Profil, Nama, Rating, Jarak, Label Keahlian) |
| 3 | Pemilihan Hewan Peliharaan | `reserve.tsx` (Pemesanan) | PetSelectionCard (Gambar Hewan, Jenis, Ras, Berat, Status Seleksi)   |
| 4 | Layanan & Durasi Jadwal    | `reserve.tsx` (Pemesanan) | ServiceDetailCard, Opsi Tombol Durasi Cepat (1 Hari, 3 Hari, dll.)   |
| 5 | Lokasi dan Petunjuk Arah   | `reserve.tsx` (Pemesanan) | LocationCard, Tombol Navigasi Peta (Integrasi Linking)               |
| 6 | Catatan Instruksi Khusus   | `reserve.tsx` (Pemesanan) | CareNotesCard (Wadah Teks Instruksi Makanan, Obat, dan Kebiasaan)    |


## E. Alasan Design
1. Penggunaan NativeWind dan Styling Terpusat:
   - Penggunaan Tailwind CSS via NativeWind mempermudah konsistensi tata letak visual berbasis kelas utilitas.
   - Penggunaan kombinasi warna putih, hijau dan orange dipakai karena memberikan kesan bersih dan nyaman untuk dilihat
     
2. Penggunaan Struktur Tampilan Statis:
   - Menghindari penggunaan iterasi dinamis berlebih pada komponen UI tertentu untuk menjaga performa rendering.
   - 
     
3. Penanganan SafeArea dengan Safe Margin Padding:
   - Penggunaan kontainer View dengan pt yg disesuaikan sebagai pengganti SafeAreaView standar dilakukan untuk menghindari ketidakcocokan tata letak pada versi React Native/Expo tertentu di platform Android.
   
4. Navigasi Sistem Android (BackHandler):
   - Penerapan logika navigasi BackHandler memastikan pergerakan kembali pengguna selalu terarah menuju layar utama sehingga tidak terjadi kesalahan menutup aplikasi dari page bukan home secara mendadak karena salah geser atau salah pencet tombol.

