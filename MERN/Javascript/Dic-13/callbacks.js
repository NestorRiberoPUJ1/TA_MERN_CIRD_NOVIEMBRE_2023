


const saludar = () => {
    console.log("hola");
}
const suma = (n1, n2) => n1 + n2;

setTimeout(saludar, 3000);

const func = (fn, val) => {
    if (1 < 8) {
        fn();
        console.log(val(8,5));
        console.log(fn);
    }
    else {
        fn();
        fn();
    }
}

func(saludar,suma);