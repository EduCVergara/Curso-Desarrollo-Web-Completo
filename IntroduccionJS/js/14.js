// Arrays

const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
console.table(numeros); // Formatea en una tabla los datos de, en este caso, el arreglo

// Creación como constructor
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

const arreglo = ["hola", 10, true, "si", null, {nombre: 'Eduardo', trabajo: 'TI'}, [1, 2, 3]];
console.log(arreglo);

// Accediendo a valores de un arreglo

// console.log(numeros[4]); // accede al número 50 del array 'numeros'
// console.log(meses[3]); // accede al mes Abril del array 'meses'

// Accediendo con un ciclo forEach

// numeros.forEach(function(numero) {
//     console.log(numero)
// });

// Saber la extensión del arreglo
// console.log(numeros.length);

//Agregar nuevos elementos al arreglo
numeros[5] = 60; // Si el elemento existe en el índice indicado, éste lo modificará

numeros.push(60, 70, 80); //agrega elementos al final del arreglo

numeros.unshift(-10, -20, -30); //agrega elementos al inicio del arreglo

//Eliminar elementos del arreglo
meses.pop(); //Elimina el último elemento del arreglo
meses.shift(); //Elimina el primer elemento del arreglo
meses.splice(2, 1); //Elimina el elemento del índice indicado en el primer valor, y x cantidad más desde el índice indicado, donde x es el 2do número.

console.table(numeros);

//Mantener datos originales luego de extraer los datos de los originales
//Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio']; //Esto crea un arreglo nuevo, con los datos del array 'meses', y le agrega el elemento 'Junio' al final
//Si 'Junio' estuviese delante de '...meses', este nuevo arreglo agrega el valor al inicio.
console.log(nuevoArreglo);