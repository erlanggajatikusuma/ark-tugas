// 1. join
// join adalah method (fungsi) yang mengubah isi elemen dari sebuah array menjadi string

let arr = ["First","Second","Third"];
let str = arr.join();

console.log(typeof str);
console.log(str);

// 2. reverse()
// method (fungsi) yang membalik urutan elemen dalam array

let fruits = ["pisang", "jeruk", "apel", "mangga", "pepaya"];
let rev = fruits.reverse();
console.log(rev);


// 3. concat()
// digunakan untuk menggabungkan dua atau lebih objek(string, array), tanpa mengubah objek yang ada namun mengembalikannya sebagai objek baru

const angka = [1, 2, 3];
const huruf = ['a', 'b', 'c'];

let angkaHuruf = angka.concat(huruf);
console.log(angkaHuruf);

// 4. isArray()
// digunakan untuk mengecek apakah sebuah object adalah array. Jika iya akan mengembalikan nilai boolean true jika bukan, maka false

const angka2 = [1, 2, 3];
const huruf2 = 'abcde';

let arr2 = Array.isArray(angka2);
let arr3 = Array.isArray(huruf2);

console.log(arr2);
console.log(arr3);


// 5. trim()
// menghapus whitespace (spasi) dari kedua sisi string

let abjad = "    abcde    ";
let trim = abjad.trim();

console.log(trim);


// 6. toLowerCase()
// mengubah sebuah string menjadi huruf kecil

let inp = "ABCDE";
let res = inp.toLowerCase();

console.log(res);

// 7. toUpperCase()
// mengubah sebuah string menjadi huruf besar

const inp2 = "abcde";
const res2 = str.toUpperCase();

console.log(res2);

// 8. isInteger()
// mengecek apakah sebuah nilai adalah bilangan bulat, jika ya mengembalikan boolean true, jika tidak maka false

const satu = 1;
const dua = 0.5;

console.log(Number.isInteger(satu));
console.log(Number.isInteger(dua));

// 9. shift()
// menghapus item pertama dari sebuah array, dan nilai kembaliannya adalah nilai yang dihapus
// fungsi ini mengubah panjang dari array, dan mengubah array asli

const buah = ["pisang", "jeruk", "apel", "anggur"];
console.log(buah);  // sebelum di shif

const shift = buah.shift();
console.log(shift);   // setelah di shift

// 10. pop()
// menghapus item terakhir dari sebuah array, dan nilai kembaliannya adalah nilai yang di hapus
// fungsi ini mengubah panjang dari array, dan mengubah array asli

const buah2 = ["pisang", "jeruk", "apel", "anggur"];
console.log(buah2);  // sebelum di pop

const pop = buah2.pop();
console.log(pop);   // setelah di pop