const prompt = require("prompt-sync")({sigint: true});

let waktu, detik, menit, jam, hari, sisa;

waktu = parseInt(prompt("masukan nilai waktu : "));

hari = Math.floor(waktu / 86400);
sisa = waktu % 86400;

jam = Math.floor(sisa / 3600);
sisa = sisa % 3600;

menit = Math.floor(sisa / 60);
detik = sisa % 60;

console.log(`${hari} hari ${jam} jam ${menit} menit ${detik} detik`);
