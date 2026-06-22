const prompt = require("prompt-sync")({sigint: true});

let jarak = Number(prompt("Masukkan cm: "));

let km = Math.floor(jarak / 100000);
let sisa = jarak % 100000;

let m = Math.floor(sisa / 100);
let cm = sisa % 100;

console.log(`${km} km ${m} m ${cm} cm`);