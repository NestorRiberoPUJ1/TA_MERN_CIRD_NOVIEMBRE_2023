
const arreglo = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30];


const sort1 = (arr) => {
    let veces = 0;
    for (let idx = 0; idx < arr.length; idx++) {
        for (let index = 0; index < arr.length - 1; index++) {
            if (arr[index] > arr[index + 1]) {
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
            }
            veces++;
        }
    }


    console.log(arr, veces);
}

sort1(arreglo);


var veces2 = 0;

const quicksort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    var pivot = array[0];

    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
        veces2++;
    }

    return quicksort(left).concat(pivot, quicksort(right));
};

var unsorted = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30];
var sorted = quicksort(unsorted);

console.log('Sorted array', sorted, veces2);