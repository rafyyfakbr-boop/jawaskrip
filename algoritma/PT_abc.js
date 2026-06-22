const prompt = require("prompt-sync")({sigint: true});

let nama = prompt("Masukkan nama: ");
let gol = prompt("Masukkan golongan (A/B/C/D): ").toUpperCase();
let jamKerja = Number(prompt("Masukkan jam kerja: "));

let upahPerjam, gaji;

if (gol === "A") {
    upahPerjam = 4000;
}
else if (gol === "B") {
    upahPerjam = 5000;
}
else if (gol === "C") {
    upahPerjam = 6000;
}
else if (gol === "D") {
    upahPerjam = 7500;
}
else {
    console.log("Golongan tidak valid.");
}

if (jamKerja <= 48) {
    gaji = jamKerja * upahPerjam;
}
else {
    let lembur = jamKerja - 48;
    gaji = (48 * upahPerjam) + (lembur * 3000);
}

console.log("Nama: " + nama);
console.log("Golongan: " + gol);
console.log(`Gaji: Rp ${gaji.toLocaleString()}`);