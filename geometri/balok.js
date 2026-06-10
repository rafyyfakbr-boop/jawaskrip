const prompt = require('prompt-sync')({sigint: true});

let panjang, lebar, tinggi, volume, luas_permukaan;

panjang = parseInt(prompt('masukan nilai panjang : '));
lebar = parseInt(prompt('masukan nilai lebar : '));
tinggi = parseInt(prompt('masukan nilai tinggi : '));

volume = panjang * lebar * tinggi;
luas_permukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

console.log(`volume   :${volume.toFixed(2)}cm³`);
console.log(`luas permukaan   :${luas_permukaan.toFixed(2)}cm²`);