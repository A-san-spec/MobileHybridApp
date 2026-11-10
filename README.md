
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
