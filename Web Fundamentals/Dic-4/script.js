


/* Arreglos */


var num = 4;
var num2 = 12;
var num3 = 6;

var nums = [4, 12, 6];
console.log("Tamaño lista:", nums.length);
console.log("Elemento #2:", nums[2]);

/* Metodos */

//Agregar elementos
console.log(nums);
nums.push(8);
nums.push(14);
console.log(nums);

//Eliminar elementos 
nums.pop()
console.log(nums);

//Agregar listas
var ints = [1, 2, 3, 4];
nums = nums.concat(ints);
console.log(nums);

//Eliminar primer elemento de lista
nums.shift()
console.log(nums);


//ejemplo de una lista [a,b,c,d,e...z] pasar a una lista [b,c,d,e...z,a]

var lista=[1,2,3,4,5,6,7,8];
lista.push(lista.shift());
console.log(lista);


//ejemplo de una lista [a,b,c,d,e...,y,z] pasar a una lista [z,a,b,c,d,e,...,y]

lista.unshift(lista.pop());
console.log(lista);


// division del arreglo

console.log(lista,lista.slice(0,4));
lista=[].concat(lista.slice(0,4),[21],lista.slice(4));
console.log(lista);