const prompt = require("prompt-sync")({sigint: true});

let totalBelanja = parseInt(prompt("Masukkan total belanja: "));
let diskon = 0;

if (totalBelanja > 100000) {
    diskon = totalBelanja * 0.1;
}

let bayar = totalBelanja - diskon;

console.log("Diskon =", diskon);
console.log("Total Bayar =", bayar);