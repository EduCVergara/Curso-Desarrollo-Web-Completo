// Arrow Functions - otra manera de declarar funciones
//Función normal:
const sumar2 = function(num1, num2)  {
    console.log(num1 + num2);
}
sumar2(5, 10);
//Arrow Function:
const sumar3 = (num1, num2) =>  console.log(num1 + num2);
sumar2(5, 10);

//Sintaxis principal de un Arrow Function:
//al igual que las líneas, cuando le pasas un sólo parámetro puedes omitir los paréntesis también
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`) // cuando el arrow function tiene una sola línea se pueden eliminar las llaves.

aprendiendo('JavaScript');


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisor 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
]

// ForEach
meses.forEach(mes => {
    let mesBuscado = 'Marzo'
    if (mes == mesBuscado) {
        console.log(`${mesBuscado} si existe en este Array!`);
    }
})

let resultado;
// Para arreglos de objetos: Some en arrow function
resultado = carrito.some(producto => producto.nombre === 'Celular');
//Reduce en arrow function
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
//Filter - Sirve para obtener un elemento X según un filtro
resultado = carrito.filter(producto => producto.precio > 400); //Filtra por precios de productos mayores a 400

resultado = carrito.filter(producto => producto.nombre !== 'Celular'); //Filtra por productos que no sean Celulares
console.log(resultado);
