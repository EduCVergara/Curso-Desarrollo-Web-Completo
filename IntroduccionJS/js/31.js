//Notification API
const boton = document.querySelector('#boton'); //Creo un variable direccionada al botón creado en el HTML
boton.addEventListener('click', () => { //Esta función que nos va a permitir registrar un evento a esta variable de botón que tiene agregado el HTML con el #boton (id)
    console.log('Has hecho click!')
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
}) 

if(Notification.permission == 'granted') {
    new Notification('Notificación', {
        icon: 'img/ccj.png',
        body: '¡La notificación ha funcionado!'
    })
}