
console.time("main");
var uno = 1;
var dos = 2;
var cero = 0;


console.log("Variable", uno);

console.warn("Ninguna division puede ser por cero");
var nada = uno / cero;
console.log(nada);
console.error("Division no converge");

console.timeEnd("main");


/* Variables globales o locales */


let word = "HI";
var palabra;

function saludar() {

    console.log(palabra);
    console.log(word);
    var wave = "Bye";
    console.log(wave);
}

function sayHi() {
    console.log(palabra);
    console.log(word);
}

palabra = "Adios";
saludar();

palabra = "HOLA"

saludar();

sayHi();

console.time("var");
for (var index = 0; index < 10000000000; index++) {
    var hola = 1;

}
console.timeEnd("var");

console.time("let");
for (let index = 0; index < 10000000000; index++) {
    let hola = 1;

}
console.timeEnd("let");
