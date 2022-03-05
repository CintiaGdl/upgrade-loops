/* 
Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:
*/
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 45, name: 'El gato felix'}
    ]

const toysWithoutCats = []

toys.forEach(element => {
    if (!element.name.includes('gato')) {
        toysWithoutCats.push(element);
    }
});



console.log(toysWithoutCats);
