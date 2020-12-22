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
    console.log(persona.nombre.toUpperCase())
}

function imprimirNombreEnMayusculas2({nombre}) {
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(daniel)
imprimirNombreEnMayusculas2(isaac)
imprimirNombreEnMayusculas({nombre:'ingrid'})

