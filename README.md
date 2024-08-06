# Basic Banking System

## Deskripsi

Sistem Perbankan Dasar ini adalah aplikasi sederhana yang dibuat menggunakan HTML dan JavaScript. Aplikasi ini memungkinkan pengguna untuk melakukan transaksi seperti deposit, withdraw, memeriksa saldo, dan melihat riwayat transaksi. Aplikasi ini menggunakan konsep Pemrograman Berorientasi Objek (OOP) dan mensimulasikan operasi transaksi secara asynchronous.

## Fitur

- **Deposit**: Menambahkan saldo ke akun.
- **Withdraw**: Mengurangi saldo dari akun.
- **Check Balance**: Memeriksa saldo saat ini.
- **Transaction History**: Melihat riwayat transaksi yang telah dilakukan.
- **Exit**: Mengakhiri aplikasi.

## Cara Menggunakan

1. **Buka aplikasi**: Buka file `index.html` di browser web Anda.
2. **Mulai aplikasi**: Klik tombol "Start Application" untuk memulai aplikasi.
3. **Pilih tindakan**: Pilih salah satu dari opsi berikut melalui dialog prompt:
   - `1` **Deposit**: Masukkan jumlah yang ingin Anda tambahkan ke saldo.
   - `2` **Withdraw**: Masukkan jumlah yang ingin Anda kurangi dari saldo.
   - `3` **Check Balance**: Lihat saldo saat ini.
   - `4` **Transaction History**: Lihat riwayat transaksi.
   - `5` **Exit**: Keluar dari aplikasi.

## Struktur Proyek

```
└── 📁 src
    └── bank_account.js
    └── banking_system.js
    └── index.html
```

- **`index.html`**: File HTML utama yang memuat aplikasi dan tombol untuk memulai aplikasi.
- **`bank_account.js`**: File JavaScript yang berisi kelas `BankAccount` yang mendefinisikan semua operasi perbankan seperti deposit, withdraw, memeriksa saldo, dan melihat riwayat transaksi.
- **`banking_system.js`**: File JavaScript yang menjadi pusat implementasi sistem perbankan menggunakan konsep OOP dari kelas `BankAccount` menangani menu utama.

## Penjelasan Kode

### `bank_account.js`

- **Kelas `BankAccount`**:
  - **`constructor()`**: Inisialisasi saldo awal dan riwayat transaksi.
  - **`isValidAmount(amount)`**: Memeriksa validitas jumlah yang dimasukkan.
  - **`processTransaction(action, amount, transactionMessage)`**: Mengelola proses transaksi dengan penundaan simulasi dan memvalidasi jumlah.
  - **`deposit(amount)`**: Menambahkan saldo ke akun.
  - **`withdraw(amount)`**: Mengurangi saldo dari akun jika saldo mencukupi.
  - **`checkBalance()`**: Menampilkan saldo saat ini.
  - **`historyTransaction()`**: Mengembalikan riwayat transaksi dengan penundaan simulasi.

### `banking_system.js`

- **`getUserChoice()`**: Mengambil pilihan aksi pengguna melalui prompt.
- **`handleUserChoice(account, choice)`**: Menangani pilihan pengguna dan melakukan aksi yang sesuai pada akun yang dipilih.
- **`menu()`**: Menyediakan antarmuka utama untuk interaksi dengan pengguna dan mengelola siklus hidup aplikasi.
- **Event Listener**: Menjalankan fungsi `menu()` saat tombol "Start Application" diklik.

## Kontribusi

Jika Anda memiliki saran atau perbaikan untuk aplikasi ini, silakan buat pull request atau buka issue di repositori ini.

## Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk informasi lebih lanjut.

---
