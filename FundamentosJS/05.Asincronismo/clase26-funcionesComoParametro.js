class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }
    esAlto() {
        return this.altura >= 1.8
    }

}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(fn) {
        var {nombre, apellido} = this

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}


function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`No sabia que eras Dev`)
    }
}

var daniel = new Persona('daniel', 'cornelio', 1.82)
var jessica = new Persona('jessica', 'zuarts', 1.80)
var marcela = new Desarrollador('marcela', 'peralta', 1.77)

daniel.saludar()
jessica.saludar(responderSaludo)
marcela.saludar(responderSaludo)