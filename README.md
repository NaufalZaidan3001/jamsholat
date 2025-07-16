Jam Sholat Digital

<p align="center">
<img src="https://i.imgur.com/Asa2B3W.png" alt="Logo Aplikasi Jam Sholat Digital" width="128"/>
</p>

<p align="center">
Aplikasi jam sholat digital modern yang dibuat dengan Expo dan React Native.
</p>
Deskripsi

Jam Sholat Digital adalah aplikasi seluler yang dirancang untuk memberikan informasi waktu sholat yang akurat dan dapat disesuaikan. Aplikasi ini secara otomatis mendeteksi lokasi pengguna untuk menghitung jadwal sholat harian dan menyajikannya dalam antarmuka yang bersih, modern, dan mudah dibaca. Selain itu, aplikasi ini dilengkapi dengan alarm adzan yang dapat dikonfigurasi, penyesuaian tanggal Hijriah, dan berbagai metode perhitungan untuk memenuhi kebutuhan pengguna di seluruh dunia.

Proyek ini dibangun dari awal menggunakan framework React Native dan Expo, dengan fokus pada pengalaman pengguna yang lancar dan fungsionalitas yang andal, baik online maupun offline.
✨ Fitur Utama

    Waktu Sholat Otomatis: Menghitung jadwal sholat harian (Subuh, Dzuhur, Ashar, Maghrib, Isya) secara akurat berdasarkan lokasi GPS pengguna.

    Tampilan Informatif:

        Jam digital modern yang menampilkan jam dan menit.

        Tampilan tanggal Gregorian dan Hijriah secara bersamaan.

        Hitung mundur (countdown) ke waktu sholat berikutnya.

    Alarm Adzan Cerdas:

        Alarm berbunyi saat waktu sholat tiba, diawali dengan bunyi bip singkat.

        Suara adzan yang berbeda untuk Subuh dan waktu sholat lainnya.

        Tombol "Hentikan" untuk mematikan adzan yang sedang diputar.

        Kemampuan untuk mengaktifkan atau menonaktifkan alarm melalui menu Pengaturan.

        Audio dapat berjalan di latar belakang (background).

    Kustomisasi Penuh:

        Metode Perhitungan: Pilih dari berbagai metode perhitungan populer (Kemenag, Muslim World League, ISNA, dll.).

        Mazhab Asar: Sesuaikan perhitungan waktu Ashar antara metode Standar (Jumhur) dan Hanafi.

        Penyesuaian Tanggal Hijriah: Koreksi tanggal Hijriah (± 2 hari) agar sesuai dengan pengamatan lokal.

    Dukungan Offline: Setelah lokasi awal ditetapkan, aplikasi tidak memerlukan koneksi internet untuk menghitung waktu sholat.

    Antarmuka Adaptif: Desain yang dioptimalkan untuk keterbacaan yang jelas di ponsel dan perangkat berlayar besar seperti Smart TV.

🚀 Memulai
1. Instalasi Dependensi

Pastikan Anda memiliki Node.js di komputer Anda. Buka terminal di dalam direktori proyek dan jalankan:

npm install

Perintah ini akan menginstal semua pustaka yang diperlukan oleh proyek.
2. Menjalankan Aplikasi

Untuk memulai server pengembangan Expo, jalankan:

npx expo start

Dari output di terminal, Anda dapat memilih untuk:

    Memindai kode QR menggunakan aplikasi Expo Go di ponsel Anda.

    Menjalankan aplikasi di Android Emulator atau iOS Simulator.

📦 Membangun Aplikasi (Build) untuk Produksi

Untuk membuat file aplikasi yang dapat diinstal (.apk untuk Android atau .ipa untuk iOS), Anda perlu menggunakan EAS (Expo Application Services).
Langkah 1: Instal EAS CLI

Jika Anda belum menginstalnya, buka terminal dan jalankan perintah global berikut:

npm install -g eas-cli

Langkah 2: Login ke Akun Expo

Pastikan Anda sudah memiliki akun di expo.dev. Kemudian, login melalui terminal:

eas login

Langkah 3: Konfigurasi Proyek untuk Build

Di dalam direktori proyek Anda, jalankan perintah ini untuk membuat file eas.json:

eas build:configure

Anda dapat menerima semua pilihan default yang ditawarkan.
Langkah 4: Mulai Proses Build

Untuk membuat file .apk yang dapat diinstal di perangkat Android, jalankan:

eas build --platform android

Proses ini akan meng-upload proyek Anda ke server Expo dan melakukan build di cloud. Ini mungkin memakan waktu 10-20 menit.
Langkah 5: Unduh dan Instal

Setelah proses build selesai, Anda akan mendapatkan tautan di terminal. Buka tautan tersebut di browser Anda. Di halaman tersebut, Anda akan menemukan tombol untuk mengunduh file .apk yang sudah jadi. Pindahkan file tersebut ke perangkat Android Anda dan instal.