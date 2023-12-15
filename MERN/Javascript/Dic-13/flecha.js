

function f1(params) {
    console.log("F1", params);
}

const flecha = (params) => {
    console.log("Flecha", params);
}


const f2 = function (params) {
    console.log("F2", params);
}

f1("hola");
flecha("hola");
f2("hola");