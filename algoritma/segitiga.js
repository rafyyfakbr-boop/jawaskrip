const prompt = require("prompt-sync")({sigint: true});

let a = parseInt(prompt("Masukkan sisi a:"));
let b = parseInt(prompt("Masukkan sisi b:"));
let c = parseInt(prompt("Masukkan sisi c:"));

if (a*a + b*b === c*c) {
    console.log("Segitiga Siku-siku");
} else if (a*a + b*b > c*c) {
    console.log("Segitiga Lancip");
} else {
    console.log("Segitiga Tumpul");
}