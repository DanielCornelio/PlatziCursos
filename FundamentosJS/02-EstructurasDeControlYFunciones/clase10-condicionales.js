var daniel = {
    nombre : 'daniel',
    apellido : 'cornelio',
    edad : 31,
    ingeniero : true,
    cocinero : false,
    cantante : false,
    dj : false,
    guitarrista : true,
    drone : false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es Ingeniero')
    }
    if(persona.cocinero){
        console.log('Cocinero')
    }else{
        console.log('No es Cocinero')
    }
    if(persona.cantante){
        console.log('Cantante')
    }else{
        console.log('No es Cantante')
    }
    if(persona.dj){
        console.log('DJ')
    }else{
        console.log('No es DJ')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }else{
        console.log('No es Guitarrista')
    }
    if(persona.drone){
        console.log('Drone')
    }else{
        console.log('No es volador de Drone')
    }

}
imprimirProfesiones(daniel)


function imprimirSiEsMayorDeEdad(persona){
    var {nombre, edad}= persona
    if(edad >= 18){
        console.log(`${nombre} tiene ${edad} años, Es Mayor de edad`)
    }else{
        console.log(`${nombre} tiene ${edad} años, Es Menor de edad`)
    }
}
imprimirSiEsMayorDeEdad(daniel)