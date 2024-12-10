// Async / Await

function descargarNuevosClientes () {
    return new Promise(resolve => {
        console.log('Descargando Clientes... Espere...');

        setTimeout( () => {
            console.log('Clientes descargados correctamente!');
        }, 5000);
    })
}

function descargarUltimosPedidos () {
    return new Promise(resolve => {
        console.log('Descargando Pedidos... Espere...');

        setTimeout( () => {
            console.log('Pedidos descargados correctamente!');
        }, 3000);
    })
}
// Pregunta para Async Await de entrevista de trabajo
// Para trabajar con dos async awaits, se debe crear un arreglo con las funciones a trabajar, se cambia un poco la sintaxis
async function app() {
    try {
        // const resultado = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log('Este código si se bloquea');
        // console.log(resultado);
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0,1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este código no se bloquea');