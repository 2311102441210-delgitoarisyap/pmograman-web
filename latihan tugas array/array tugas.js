
// Membuat Array untuk menyimpan data
let dataMahasiswa = [];

// Fungsi menampilkan seluruh data
function tampilkanData() {

    const daftar = document.getElementById("daftarData");
    const jumlah = document.getElementById("jumlahData");

    // Mengosongkan daftar sebelum ditampilkan kembali
    daftar.innerHTML = "";

    // Menampilkan data menggunakan forEach
    dataMahasiswa.forEach(function(nama, index) {

        const item = document.createElement("li");

        const teks = document.createElement("span");
        teks.textContent = nama;

        const tombolHapus = document.createElement("button");
        tombolHapus.textContent = "Hapus";
        tombolHapus.className = "hapus";

        // Menghapus data berdasarkan index
        tombolHapus.onclick = function() {
            hapusData(index);
        };

        item.appendChild(teks);
        item.appendChild(tombolHapus);

        daftar.appendChild(item);

    });

    // Menghitung jumlah data
    jumlah.textContent = "Jumlah data: " + dataMahasiswa.length;
}

// Fungsi menambahkan data
function tambahData() {

    const input = document.getElementById("inputData");

    const nama = input.value.trim();

    if (nama === "") {
        alert("Silakan masukkan nama terlebih dahulu!");
        return;
    }

    // Menambahkan data menggunakan push()
    dataMahasiswa.push(nama);

    // Mengosongkan input
    input.value = "";

    // Memperbarui tampilan
    tampilkanData();

}

// Fungsi menghapus data
function hapusData(index) {

    // Menghapus data menggunakan splice()
    dataMahasiswa.splice(index, 1);

    // Memperbarui tampilan
    tampilkanData();

}

// Menampilkan daftar saat halaman dibuka
tampilkanData();
