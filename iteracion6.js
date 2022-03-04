/* 
Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:
*/
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 45, name: 'El gato felix'}
    ]

/* for (const toy of toys) {
    
    if (toy.name.includes('gato')) {
        let position = toys.indexOf();
        console.log(toys);
        toys.splice(position, 1);
    }
} */

/* for (const toy of toys) {
    let position = [];
    if (toy.name.includes('gato')) {
        let positionToy = toys.indexOf();
        position.push(positionToy);
    }
}
console.log(position);
console.log(toys); */
/* let position = [];
for (const toy of toys) {
    if (toy.name.includes('gato')) {
        position.push(toys.indexOf());
    }
}
console.log(position); */

