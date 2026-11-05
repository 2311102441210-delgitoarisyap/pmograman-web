
// Array => objek yang digunakan untuk menyimpan banyak data dalam satu variabel

let databuah = ["Padi", "Sirsak", "Jeruk", "Apel", "Melon"];

console.log(databuah);

// Menampilkan data array berdasarkan index
console.log(databuah[0]);
console.log(databuah[1]);
console.log(databuah[2]);
console.log(databuah[3]);
console.log(databuah[4]);
console.log(databuah[5]);

// Length => untuk mengetahui jumlah data dalam array
console.log(databuah.length);

// Menambahkan data menggunakan push()
databuah.push("Mangga");

console.log("Setelah push:");
console.log(databuah);

// Menghapus data terakhir menggunakan pop()
databuah.pop();

console.log("Setelah pop:");
console.log(databuah);

// Menambahkan data di awal menggunakan unshift()
databuah.unshift("Durian");

console.log("Setelah unshift:");
console.log(databuah);

// Menghapus data pertama menggunakan shift()
databuah.shift();

console.log("Setelah shift:");
console.log(databuah);
// Mengubah data berdasarkan index
databuah[0] = "Semangka";

console.log("Setelah data diubah:");
console.log(databuah);

// Perulangan Array menggunakan for

console.log("=== PERULANGAN ARRAY ===");

for (let i = 0; i < databuah.length; i++) {
    console.log("Buah ke-" + (i + 1) + ": " + databuah[i]);
}

// Perulangan menggunakan forEach()

console.log("=== MENGGUNAKAN FOREACH ===");

databuah.forEach(function(buah, index) {
    console.log(index + 1 + ". " + buah);
});


// 1. shift() => menghapus data pertama array
databuah.shift();
console.log("Hasil shift:", databuah);

// 2. splice() => menghapus data berdasarkan index
databuah.splice(2, 1);
console.log("Hasil splice:", databuah);

// 3. slice() => mengambil sebagian data array
let dataBaru = databuah.slice(1, 3);
console.log("Hasil slice:", dataBaru);

// 4. join() => menggabungkan data array menjadi string
let dataJoin = databuah.join(", ");
console.log("Hasil join:", dataJoin);

// 5. concat() => menggabungkan dua array
let dataConcat = databuah.concat(["Durian", "Rambutan"]);
console.log("Hasil concat:", dataConcat);

// 6. sort() => mengurutkan data array
let dataSort = [...databuah].sort();
console.log("Hasil sort:", dataSort);

// 7. reverse() => membalik urutan data array
let dataReverse = [...databuah].reverse();
console.log("Hasil reverse:", dataReverse);

// 8. forEach() => menampilkan setiap data array
console.log("Hasil forEach:");

databuah.forEach(function(buah, index) {
    console.log(index + 1, buah);
});
// indexOf => mencari index data array
let index = databuah.indexOf("Joko");
console.log(index);