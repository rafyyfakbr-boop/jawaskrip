const prompt = require("prompt-sync")({sigint: true});

let tinggi = Number(prompt("Masukkan tinggi badan: "));

let beratIdeal =
(tinggi - 100) -
(0.1 * (tinggi - 100));

console.log("Berat badan ideal =", beratIdeal, "kg");