// Tipos de datos:
//String o cadena de texto
const producto = "Monitor de 20\""; //acá se escapa la comilla doble dentro de la variable con un \.
const producto4 = "Monitor HD";
const producto2 = String('Monitor de 20"');
const producto3 = new String("Monitor 50 Pulgadas");
// se pueden usar comillas simples o dobles
console.log(producto);
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
//MÉTODOS O FUNCIONES ASOCIADOS A STRINGS:

//length es para saber la extensión de la variable:
console.log(tweet.length);
console.log(producto2.length);

//IndexOf (retorna posición):
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));

//Includes (retorna True o False):
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));