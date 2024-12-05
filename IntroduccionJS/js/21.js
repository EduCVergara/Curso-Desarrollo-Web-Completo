// Arrow Functions - otra manera de declarar funciones
//Función normal:
const sumar2 = function(num1, num2) {
    console.log(num1 + num2);
}
sumar2(5, 10);
//Arrow Function:
const sumar3 = (num1, num2) =>  console.log(num1 + num2);
sumar2(5, 10);

//Sintaxis principal de un Arrow Function:
const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`) // cuando el arrow function tiene una sola línea se pueden eliminar las llaves.

aprendiendo('JavaScript');