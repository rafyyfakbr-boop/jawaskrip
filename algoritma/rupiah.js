const prompt = require("prompt-sync")({sigint: true});

let uang = Number(prompt("Masukkan uang: "));

let p100 = Math.floor(uang / 100);
let sisa = uang % 100;

let p50 = Math.floor(sisa / 50);
sisa = sisa % 50;

let p25 = Math.floor(sisa / 25);

console.log("Pecahan 100 =", p100);
console.log("Pecahan 50 =", p50);
console.log("Pecahan 25 =", p25);