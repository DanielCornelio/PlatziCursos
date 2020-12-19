var nombre ='Daniel'
// Variable global: Variable que no esta definida dentro de una funcion sino por fuera de ella.
// Al hacer referencia directa a una variable global dentro de una funcion, podermos modificar su valor, esto se le denomina sideEfect, y esto lo vamos a querer evitar.

// Para acceder a la variable global, hacemos referencia al objeto global, en este caso por estar en el browser accedemos con window.nombre

function imprimirNombreEnMayusculas() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas() 

// El alcance de la siguiente funcion solo es para la variable local que le llega por parametro

function imprimirNombreEnMayusculas(n) {
    n = n.toUpperCase()
    console.log(n)
}
imprimirNombreEnMayusculas(nombre)