//Orden de las operaciones
let resultado;

// El orden de las operaciones es importante, pues normalmente esta operación primero ejecuta la multiplicación, y luego la suma
resultado = 20 + 30 * 2;
// Si por ejemplo quiero que se ejecute primero la suma, debo agregarle un paréntesis, Ej: (20 + 30) * 2
// Ejemplo práctico donde esto es útil:
resultado = (100 + 200 + 300) * .2; // En este caso se saca el 20% del valor total (600)


// console.log(resultado);

// Incrementos

let puntaje = 10;
//esta operación da el valor y luego le aumenta 1
puntaje++;
//esta operación le aumenta en 1 y luego da el valor
++puntaje;

//de la misma manera que el aumento, está el decremento:
puntaje--;

//se puede aumentar en más de 1 directamente:
puntaje += 10;

console.log(puntaje);