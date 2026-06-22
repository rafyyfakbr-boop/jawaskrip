const prompt = require ("prompt-sync")({sigint: true});
let berat, tinggi, ideal, selisih;

berat = parseFloat(prompt("Masukkan berat badan (kg): "));
tinggi = parseFloat(prompt("Masukkan tinggi badan (cm): "));

ideal = (tinggi - 100) * 0.9;
selisih = Math.abs(berat - ideal);

if (selisih <= 2) {
    console.log("Ideal");
} else {
    console.log("Tidak Ideal");
}