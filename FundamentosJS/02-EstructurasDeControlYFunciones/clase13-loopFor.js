var daniel = {
    nombre: 'Daniel',
    apellido: 'Cornelio',
    edad: 31,
    peso: 140
}
console.log(`Al inicio del año ${daniel.nombre} pesaba ${daniel.peso.toFixed(1)}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365
const disminuirDePeso = persona => persona.peso -= INCREMENTO_PESO
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var ramdom = Math.random()
    if (ramdom < 0.25) {
        aumentarDePeso(daniel)
    } else if (ramdom < 0.5) {
        disminuirDePeso(daniel)
    }

}


console.log(`Al final del año ${daniel.nombre} pesa ${daniel.peso.toFixed(1)}kg`)