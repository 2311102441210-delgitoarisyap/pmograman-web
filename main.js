
 // TIPE DATA JAVASCRIPT

// 1. Number
let x = 10.5;
console.log("Nilai x:", x);
console.log("Tipe data x:", typeof x);

// 2. String
let nama = "Delgito";
console.log("Nama:", nama);
console.log("Tipe data nama:", typeof nama);

// 3. Boolean
let mahasiswaAktif = true;
console.log("Mahasiswa aktif:", mahasiswaAktif);
console.log("Tipe data:", typeof mahasiswaAktif);

// 4. Undefined
let alamat;
console.log("Alamat:", alamat);
console.log("Tipe data alamat:", typeof alamat);

// 5. Null
let data = null;
console.log("Data:", data);
console.log("Tipe data data:", typeof data);

// 6. Array
let buah = ["Apel", "Mangga", "Jeruk"];
console.log("Daftar buah:", buah);

// 7. Object
let mahasiswa = {
    nama: "Delgito",
    nim: "2311102441210",
    kelas: "B"
};
console.log("Data mahasiswa:", mahasiswa);

// 5. PERILAKU VAR DAN LET DALAM BLOK

console.log("=== Perilaku VAR ===");

var mhs1 = "Doni";

{
    var mhs1 = "Dani";
    console.log("Di dalam blok:", mhs1);
}

console.log("Di luar blok:", mhs1);


console.log("=== Perilaku LET ===");

let mhs2 = "Joni";

{
    let mhs2 = "Dino";
    console.log("Di dalam blok:", mhs2);
}

console.log("Di luar blok:", mhs2);
