function obtenerEmpleados() {
    const file = 'empleados.json';
    fetch(file)
        .then(resultado => {
            console.log(resultado);
        })
}

obtenerEmpleados();