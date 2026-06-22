const prompt = require("prompt-sync")({sigint: true});
let jh, tahun, sisaH, bulan, hari;

jh = parseInt(prompt("Masukkan jumlah hari: "));
tahun = Math.floor(jh / 365);
sisaH = jh % 365;
bulan = Math.floor(sisaH / 30);
hari = sisaH % 30;

console.log(`tahun: ${tahun} bulan: ${bulan} hari: ${hari}`);