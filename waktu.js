// MAJUKAN: geser SEMUA lirik lebih awal (detik). Kalau lirik terlambat, naikkan (mis. 0.3, 0.5). Kalau terlalu cepat, isi minus (mis. -0.2).
const MAJUKAN = 0.01;

// Jadwal tiap baris lirik: [mulai, selesai] dalam detik, sesuai urutan baris di lirik.js.
// Baris di luar jadwal ini (melewati akhir lagu) tidak ditampilkan.
const JADWAL = [
  [0.2, 1.8], [1.9, 5.0], [5.4, 8.8], [8.9, 11.2], [11.3, 13.6],
  [14.0, 17.0], [17.0, 20.6], [21.0, 23.6], [24.0, 27.6], [27.6, 30.2],
  [30.8, 34.0], [34.0, 37.0], [37.5, 40.5], [40.6, 48.0]
];
