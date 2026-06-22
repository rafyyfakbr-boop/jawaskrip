const prompt = require("prompt-sync")({sigint: true});

let bilangan = parseInt(prompt("Masukkan bilangan: "));

if (bilangan % 4 === 0) {
    console.log("Kelipatan 4");
} else {
    console.log("Bukan kelipatan 4");
}