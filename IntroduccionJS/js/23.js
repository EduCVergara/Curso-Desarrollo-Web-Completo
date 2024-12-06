//Switch
const metodoPago = 'Efectivo';

switch (metodoPago) {
    case 'Tarjeta':
        console.log('Pagaste con Tarjeta');
        break;
    case 'Efectivo':
        console.log('Pagaste con Efectivo');
        break;
    case 'Bitcoin':
        console.log('Pagaste con Bitcoin')
    default:
        console.log('Aún no has pagado');
        break;
}