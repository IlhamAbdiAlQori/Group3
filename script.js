
const bangunRuang = document.getElementById('bangunRuang');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input3Group = document.getElementById('input3Group');
const hasilVolume = document.getElementById('hasilVolume');

bangunRuang.addEventListener('change', () => {
    if (bangunRuang.value === 'balok' || bangunRuang.value === 'prismaSegitiga' || bangunRuang.value === 'kerucut') {
        input3Group.style.display = 'block';
        document.getElementById('input3').placeholder = bangunRuang.value === 'balok' ? "Masukkan Tinggi" : "Masukkan Tinggi Kerucut/Prisma";
    } else {
        input3Group.style.display = 'none';
        input3.value = '';
    }
});

function hitungVolume() {
    const pilihan = bangunRuang.value;
    const nilai1 = parseFloat(input1.value);
    const nilai2 = parseFloat(input2.value);
    const nilai3 = parseFloat(input3.value);

    let volume = 0;

    if (isNaN(nilai1) || nilai1 <= 0) {
        hasilVolume.textContent = "Nilai 1 harus angka valid lebih dari 0!";
        return;
    }
    if (isNaN(nilai2) || nilai2 <= 0) {
        hasilVolume.textContent = "Nilai 2 harus angka valid lebih dari 0!";
        return;
    }
    if ((pilihan === 'balok' || pilihan === 'prismaSegitiga' || pilihan === 'kerucut') && (isNaN(nilai3) || nilai3 <= 0)) {
        hasilVolume.textContent = "Nilai 3 harus angka valid lebih dari 0!";
        return;
    }

    if (pilihan === 'balok') {
        volume = nilai1 * nilai2 * nilai3;
    } else if (pilihan === 'tabung') {
        volume = 3.14 * nilai1 * nilai1 * nilai2;
    } else if (pilihan === 'bola') {
        volume = (4 / 3) * 3.14 * Math.pow(nilai1, 3);
    } else if (pilihan === 'prismaSegitiga') {
        volume = 0.5 * nilai1 * nilai2 * nilai3;
    } else if (pilihan === 'kerucut') {
        volume = (1 / 3) * 3.14 * Math.pow(nilai1, 2) * nilai3;
    } else {
        hasilVolume.textContent = "Pilih bangun ruang yang valid!";
        return;
    }

    hasilVolume.textContent = `Volume ${pilihan.charAt(0).toUpperCase() + pilihan.slice(1)} adalah: ${volume.toFixed(2)}`;
}
