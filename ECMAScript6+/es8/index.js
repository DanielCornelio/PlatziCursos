//Object entries deveule los valores de una matriz.

const data ={
    front:'Daniel',
    back: 'Conejo',
    desing: 'Choco'
}
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 
const data ={
    front:'Daniel',
    back: 'Conejo',
    desing: 'Choco',
}
const values = Object.values(data)
console.log(values)
console.log(values.length)

// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi'


//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data= {
    front:'Alej', // Puede existir
    back: 'Rel'
}
