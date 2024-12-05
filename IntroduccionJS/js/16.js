// Declaración de Función
sumar();
function sumar() {
    console.log(10 + 10);
}

// Expresión de la función
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// IIFE

(function() {
    console.log("Esto es una función");
}()) //Normalmente en Javascript, al llamar a una variable desde otro archivo funciona, con IIFE se previene eso

//Hoisting en Java:
//El intérprete de JavaScript divide la declaración y 
//asignación de funciones y variables: JavaScript "hoists" o "alza" 
//tus declaraciones a la parte superior de su scope (ámbito) antes de la ejecución.
//A esto se le llama hoisting, y nos permite usar "sumar()" antes de su declaración en el ejemplo anterior.

//Si te das cuenta en sumar2 está después de la creación de la función, ya que la crea como variable