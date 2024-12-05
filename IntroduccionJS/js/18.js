
function sumar(numero1 = 0, numero2 = 0) { // numero1 y 2 son parámetros, al estar definidos en 0, se establece ese valor por defecto en caso de que al llamarlo, no se llame a uno de los parametros
    console.log(numero1 + numero2);
}

sumar(10); // Argumentos o valores reales
sumar(3, 3);
sumar(3, 6);
sumar(1, 2);

// Expresión de la función
const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}

sumar2(5, 10);