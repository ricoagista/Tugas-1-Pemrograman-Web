# Portofolio Personal / Resume Digital

Halaman web ini merupakan implementasi tugas perancangan dan pengembangan **Portofolio Personal / Resume Digital** yang informatif, terstruktur, responsif, dan memiliki tampilan visual yang rapi.

## Deskripsi Tugas

Rancang dan implementasikan sebuah halaman Portofolio Personal atau Resume Digital menggunakan:

- HTML, XHTML, atau HTML5 untuk struktur dokumen.
- CSS untuk layout dan styling.
- Tidak menggunakan framework CSS, seperti Bootstrap atau Tailwind.

## Tujuan

Halaman yang dibuat diharapkan mampu menyajikan informasi personal dan profesional secara jelas, dengan struktur dokumen yang baik serta tampilan yang tetap nyaman digunakan pada berbagai ukuran layar.

## Struktur Proyek

```text
.
├── index.html   # Struktur dan isi halaman portofolio
├── styles.css   # Aturan visual, layout, dan responsivitas
├── script.js    # Interaksi halaman jika diperlukan
└── README.md    # Dokumentasi proyek
```

## Ketentuan Implementasi

### 1. Struktur dan Semantik HTML

- Menggunakan HTML5 secara valid dan terstruktur.
- Menggunakan tag semantik yang sesuai, seperti:
  - `header`
  - `nav`
  - `main`
  - `section`
  - `article`
  - `aside`
  - `footer`
- Menyusun hierarki heading secara berurutan dan logis.
- Menyertakan atribut penting seperti `lang`, `alt`, dan struktur navigasi yang jelas.
- Dokumen HTML dapat divalidasi menggunakan [W3C Markup Validation Service](https://validator.w3.org/).

### 2. Penerapan CSS dan Layouting

- Menggunakan CSS secara mandiri tanpa framework CSS.
- Memisahkan aturan styling ke dalam berkas `styles.css`.
- Menerapkan layout yang rapi dan konsisten.
- Memperhatikan:
  - Tipografi.
  - Warna.
  - Jarak antar elemen.
  - Ukuran dan keseimbangan komponen.
  - Keterbacaan konten.
- Menjaga konsistensi visual pada seluruh halaman.

### 3. Responsivitas Halaman

- Tampilan harus menyesuaikan ukuran layar desktop dan mobile.
- Tidak boleh terdapat konten yang keluar dari area layar atau menyebabkan horizontal scrolling.
- Navigasi, teks, gambar, dan komponen lain harus tetap mudah digunakan pada layar kecil.
- Menggunakan media query CSS jika diperlukan.
- Pengujian dilakukan pada beberapa ukuran viewport.

## Komponen Informasi yang Disarankan

Halaman portofolio dapat memuat beberapa bagian berikut:

- Identitas atau profil singkat.
- Ringkasan diri atau deskripsi profesional.
- Pendidikan.
- Pengalaman organisasi atau pengalaman kerja.
- Keahlian dan teknologi yang dikuasai.
- Daftar proyek atau portofolio.
- Kontak atau tautan profesional.

Konten yang ditampilkan harus berasal dari informasi yang sebenarnya dan disesuaikan dengan profil pemilik portofolio.

## Cara Menjalankan

Karena proyek menggunakan HTML, CSS, dan JavaScript murni, halaman dapat dijalankan dengan cara:

1. Buka berkas `index.html` langsung menggunakan browser, atau
2. Jalankan melalui ekstensi Live Server pada editor kode.

Tidak diperlukan proses instalasi dependency atau framework tambahan.

## Batasan Teknologi

Proyek ini sengaja dibuat menggunakan teknologi web dasar agar pemahaman terhadap struktur HTML, styling CSS, layouting, dan responsivitas dapat dinilai secara langsung.

**Teknologi yang digunakan:**

- HTML5
- CSS3
- JavaScript murni, jika diperlukan untuk interaksi halaman

**Tidak digunakan:**

- Bootstrap
- Tailwind CSS
- Framework CSS lainnya
