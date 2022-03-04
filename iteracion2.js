/* 
Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad 
***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.
Puedes usar este array para probar tu función:
*/
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach(element => {
    let counter = 0;
    let isApproved = false;
    if (element.T1 == true) {
        counter += 1;
    }
    if (element.T2 == true) {
        counter += 1;
    }
    if (element.T3 == true) {
        counter += 1;
    }
    if (counter >= 2) {
        isApproved = true
    } 
    if (isApproved) {
        console.log(element.name, 'is approved.');
    } 
        else {
            console.log(element.name)
        }
 })
