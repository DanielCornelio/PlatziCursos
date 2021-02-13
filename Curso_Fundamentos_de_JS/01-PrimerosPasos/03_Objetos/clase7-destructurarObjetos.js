var daniel = {
    nombre : 'daniel',
    apellido : 'Cornelio',
    edad : 31
}

var isaac = {
    nombre : 'isaac',
    apellido : 'carrillo',
    edad : 31
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nobre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

// Reto 

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var {nombre, edad} = persona
    var msj = `Hola mi nombre es ${nombre} y tengo ${edad} años`
    console.log(nombre.toUpperCase())
}


imprimirNombreEnMayusculas(daniel)
imprimirNombreEnMayusculas(isaac)


