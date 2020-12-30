var daniel = {
    nombre: 'Daniel',
    apellido: 'Cornelio',
    edad: 31,
    peso: 140
}
console.log(`Al inicio del año ${daniel.nombre} pesaba ${daniel.peso.toFixed(1)}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365
const disminuirDePeso = persona => persona.peso -= INCREMENTO_PESO
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const META = daniel.peso - 3
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
var dias = 0
while (daniel.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(daniel)
    }
    if (realizaDeporte()) {
        disminuirDePeso(daniel)
    }
    dias += 1
}


console.log(`han pasado ${dias} dias para que ${daniel.nombre} llegara a su meta`)