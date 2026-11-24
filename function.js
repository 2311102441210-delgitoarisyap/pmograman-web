
// ========================================
// PRAKTIKUM JAVASCRIPT FUNCTION
// ========================================


// 1. HELLO WORLD

console.log("Hello World");

function helloWorld() {
    console.log("Hello World");
}

helloWorld();


// 2. FUNCTION DASAR

function sapaMahasiswa() {
    console.log("Nama Mahasiswa : doni");
}

sapaMahasiswa();


// 3. FUNCTION DENGAN PARAMETER

function penjumlahan(a, b) {
    return a + b;
}

console.log(penjumlahan(10, 5));
console.log(penjumlahan(10, 10));
console.log(penjumlahan(7, 8));


// 4. FUNCTION EXPRESSION

const perkalian = function(a, b) {
    return a * b;
};

console.log(perkalian(3, 5));


// 5. ARROW FUNCTION

const pembagian = (a, b) => {
    return a / b;
};

console.log(pembagian(20, 2));


// 6. MULTIPLE ARGUMENTS

function sum(...angka) {
    return angka.reduce((total, nilai) => total + nilai, 0);
}

const total = sum(1, 2, 3, 4, 5);

console.log(total);


// 7. FUNCTION DENGAN CALLBACK

function inputData(callback) {
    const nama = prompt("Masukkan nama : ");
    callback(nama);
}

inputData(function(nama) {
    console.log("Nama Mahasiswa : " + nama);
});


// 8. FUNCTION CLOSURE

function outerFunction(outerVariable) {

    return function innerFunction(innerVariable) {

        console.log(outerVariable, innerVariable);

    };

}

outerFunction("outside")("inside");


// 9. FUNCTION DENGAN IIFE
// Immediately Invoked Function Expression

(function() {

    console.log("menjalankan fungsi immediately");

})();


// 10. FUNCTION REKURSIF

function faktorial(n) {

    if (n === 0) {
        return 1;
    }

    return n * faktorial(n - 1);

}

console.log("Hasil faktorial: " + faktorial(5));


// 11. FUNCTION ASYNC / AWAIT

async function fetchData(url) {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Gagal mengambil data");
        }

        const data = await response.json();

        console.log("Data berhasil diambil:");
        console.log(data);

        return data;

    } catch (error) {

        console.error("Terjadi kesalahan:", error);

    }

}


// 12. FUNCTION DENGAN PROMISE

fetchData("https://jsonplaceholder.typicode.com/users/1")
    .then(data => console.log(data))
    .catch(error => console.error(error));


// 13. FUNCTION DENGAN GENERATOR

function* generatorFunction() {

    yield 1;
    yield 2;
    yield 3;

}

const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


// 14. FUNCTION DENGAN OBJECT METHOD

const mhs = {

    nama: 'doni',

    dataMhs() {

        console.log(`Data Mahasiswa : ${this.nama}`);

    }

};

mhs.dataMhs();


// 15. FUNCTION DENGAN PROTOTYPE

function mahasiswa(nama) {

    this.nama = nama;

}

mahasiswa.prototype.sayHello = function() {

    console.log(`Nama Mahasiswa : ${this.nama}`);

};

const mhs1 = new mahasiswa("doni");

mhs1.sayHello();

// ========================================
// FUNCTION DENGAN CLASS
// ========================================

class Car {

    constructor(nama) {
        this.nama = nama;
    }

}

Car.prototype.model = function() {
    console.log(this.nama);
};

const car1 = new Car("BMW");

console.log(car1);

// Memanggil method prototype
car1.model();
