// Promises en JavaScript
const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;

    if (auth) {
        resolve('Usuario Autenticado'); //El promise se cumple
    } else {
        reject('Ha ocurrido un error de Inicio de Sesión'); //El promise no se cumple
    }
});

console.log(usuarioAutenticado);

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

// En los promises existen 3 valores:
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fullfilled: Ya se cumplió
// Rejected: Se ha rechazado o no se pudo cumplir