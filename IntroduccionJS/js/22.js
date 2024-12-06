//Estructuras de Control
// const puntaje = 1000;

// if (puntaje == 1000) {// la comparación con 3 signos '=', indica que el parámetro tiene que ser igual inclúso en el tipo de dato.
//     console.log('El puntaje si es 1000');
// } else {
//     console.log('El puntaje no es 1000');
// }

// const efectivo = 1000;
// const carrito = 800;

// if (efectivo > carrito) {
//     console.log('El usuario puede pagar');
// } else {
//     console.log('Fondos insuficientes');
// }

const rol = 'EDITOR';

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'EDITOR') {
    console.log('Eres Editor, puedes entrar pero no hacer mucho');
} else {
    console.log('No tienes acceso');
}