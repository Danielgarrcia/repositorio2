// Previamente vimos algunos métodos para strings, para números y también para objetos...

// Veamos una serie de métodos muy útiles cuando se trabaja con arrays y algunos casos de uso

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'movil', precio: 500},
    { nombre: 'altavoces', precio: 300},
    { nombre: 'portatil', precio: 800},
];


// Si te gustaría saber si nuestro array de meses, tiene el mes de Febrero, podrías hacerlo con un foreach...

meses.forEach(mes => {
    if(mes === 'Enero') {
        console.log('Enero si existe...')
    }
})

// O también podrías utilizar el Array Method de .includes

const resultado = meses.includes('Enero'); // Cambiar a Diciembre...
console.log(resultado);


// En el caso de un array de objetos... .includes no es la mejor opción, podrías utilizar uno llamado .some
const existe = carrito.some( producto => producto.nombre === 'movil' );
console.log(existe);

// Some en un array tradicional...
const existe2 = meses.some( mes => mes === 'Febrero' );
console.log(existe2);
