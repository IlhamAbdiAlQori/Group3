// Ambil elemen HTML
const bangunRuang = document.getElementById('bangunRuang');
const inputsContainer = document.getElementById('inputsContainer');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input3Group = document.getElementById('input3Group');
const hasilVolume = document.getElementById('hasilVolume');

// Tampilkan input setelah memilih bangun ruang
bangunRuang.addEventListener('change', () => {
    const pilihan = bangunRuang.value;

    // Tampilkan kontainer input
    inputsContainer.style.display = 'block';

    // Sesuaikan placeholder dan sembunyikan/munculkan input yang sesuai
    if (pilihan === 'balok') {
        input1.placeholder = "Masukkan Panjang";
        input2.placeholder = "Masukkan Lebar";
        input3.placeholder = "Masukkan Tinggi";
        input3Group.style.display = 'block';
    } else if (pilihan === 'tabung') {
        input1.placeholder = "Masukkan Jari-jari";
        input2.placeholder = "Masukkan Tinggi";
        input3Group.style.display = 'none';
    } else if (pilihan === 'bola') {
        input1.placeholder = "Masukkan Jari-jari";
        input2.placeholder = "";
        input3Group.style.display = 'none';
    } else if (pilihan === 'prismaSegitiga') {
        input1.placeholder = "Masukkan Panjang Alas";
        input2.placeholder = "Masukkan Tinggi Alas";
        input3.placeholder = "Masukkan Tinggi Prisma";
        input3Group.style.display = 'block';
    } else if (pilihan === 'kerucut') {
        input1.placeholder = "Masukkan Jari-jari Alas";
        input2.placeholder = "Masukkan Tinggi";
        input3Group.style.display = 'none';
    }
});

// Fungsi untuk menghitung volume
function hitungVolume() {
    const pilihan = bangunRuang.value;
    const nilai1 = parseFloat(input1.value);
    const nilai2 = parseFloat(input2.value);
    const nilai3 = parseFloat(input3.value);

    let volume = 0;

    // Validasi input
    if (isNaN(nilai1) || nilai1 <= 0) {
        hasilVolume.textContent = "Nilai 1 harus angka valid lebih dari 0!";
        return;
    }
    if ((pilihan !== 'bola') && (isNaN(nilai2) || nilai2 <= 0)) {
        hasilVolume.textContent = "Nilai 2 harus angka valid lebih dari 0!";
        return;
    }
    if ((pilihan === 'balok' || pilihan === 'prismaSegitiga') && (isNaN(nilai3) || nilai3 <= 0)) {
        hasilVolume.textContent = "Nilai 3 harus angka valid lebih dari 0!";
        return;
    }

    // Hitung volume berdasarkan pilihan bangun ruang
    if (pilihan === 'balok') {
        volume = nilai1 * nilai2 * nilai3; // Panjang × Lebar × Tinggi
    } else if (pilihan === 'tabung') {
        volume = 3.14 * Math.pow(nilai1, 2) * nilai2; // π × r² × Tinggi
    } else if (pilihan === 'bola') {
        volume = (4 / 3) * 3.14 * Math.pow(nilai1, 3); // (4/3) × π × r³
    } else if (pilihan === 'prismaSegitiga') {
        volume = 0.5 * nilai1 * nilai2 * nilai3; // ½ × Panjang Alas × Tinggi Alas × Tinggi Prisma
    } else if (pilihan === 'kerucut') {
        volume = (1 / 3) * 3.14 * Math.pow(nilai1, 2) * nilai2; // (1/3) × π × r² × Tinggi
    }

    // Tampilkan hasil
    hasilVolume.textContent = `Volume ${pilihan.charAt(0).toUpperCase() + pilihan.slice(1)} adalah: ${volume.toFixed(2)}`;
}
