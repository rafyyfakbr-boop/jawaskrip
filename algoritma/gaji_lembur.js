const prompt = require("prompt-sync")({sigint: true});

let jamKerja = Number(prompt("Masukkan jam kerja: "));
let gaji = 0;

if (jamKerja <= 48) {
    gaji = jamKerja * 2000;
}
else {
    let lembur = jamKerja - 48;
    gaji = (48 * 2000) + (lembur * 3000);
}
console.log("Gaji yang diterima: " + gaji);
