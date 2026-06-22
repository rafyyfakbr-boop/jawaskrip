const prompt = require("prompt-sync")({sigint: true});

let tgl1, tgl2, bulan, tahun, sisa, selisih, hari;
tgl1 = prompt("Masukkan tanggal pertama (dd:mm:yyyy)");
tgl2 = prompt("Masukkan tanggal kedua (dd:mm:yyyy)");

let [hari1, bulan1, tahun1] = tgl1.split(":").map(Number);
let [hari2, bulan2, tahun2] = tgl2.split(":").map(Number);

total1 = (tahun1 * 365) + (bulan1 * 30) + hari1;
total2 = (tahun2 * 365) + (bulan2 * 30) + hari2;

selisih = Math.abs(total2 - total1);

tahun = Math.floor(selisih / 365);
sisa = selisih % 365;

bulan = Math.floor(sisa / 30);
hari = sisa % 30;

console.log(`${tahun} tahun ${bulan} bulan ${hari} hari`);