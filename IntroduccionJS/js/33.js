// FETCH API
async function obtenerEmpleados() {
    const file = 'js/empleados.json';
    // fetch(file)
    //     .then(resultado => resultado.json())
    //     .then(datos => {
    //         const {empleados} = datos;
    //         // console.log(empleados);

    //         empleados.forEach(empleados => {
    //             console.log(empleados);
    //         });
    //     })
        
    //hacer todo el FETCH con Sync Await
    const resultado = await fetch(file);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();