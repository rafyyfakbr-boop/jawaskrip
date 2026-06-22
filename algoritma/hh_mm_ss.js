const prompt = require("prompt-sync")({sigint: true});

let jam, menit, detik;
 jam = parseInt(prompt("Masukkan jam: "));
 menit = parseInt(prompt("Masukkan menit: "));
 detik = parseInt(prompt("Masukkan detik: "));

detik++;

if (detik === 60) {
    detik = 0;
    menit++;
}

if (menit === 60) {
    menit = 0;
    jam++;
}

if (jam === 24) {
    jam = 0;
}

console.log(
    String(jam).padStart(2, '0') + ':' +
    String(menit).padStart(2, '0') + ':' +
    String(detik).padStart(2, '0')
);