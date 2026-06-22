const prompt = require ("prompt-sync")({sigint: true});

let belanja = parseInt(prompt("Masukkan nilai belanja:"));

let hasil = Math.floor(belanja / 100) * 100;

console.log("Hasil pembulatan =", hasil);