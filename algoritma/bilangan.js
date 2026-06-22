const prompt = require("prompt-sync")({sigint: true});

let bilangan = Number(prompt("Masukkan bilangan: "));

if (bilangan > 0) {
    console.log("Bilangan " + bilangan + " adalah bilangan positif.");
}
else if (bilangan < 0) {
    console.log("Bilangan " + bilangan + " adalah bilangan negatif.");
}else {
    console.log("Bilangan " + bilangan + " adalah nol.");
}
