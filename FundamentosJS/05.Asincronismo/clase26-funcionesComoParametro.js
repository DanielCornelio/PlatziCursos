class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }
    esAlto() {
        return this.altura >= 1.8
    }

}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
    }
}


var daniel = new Persona('daniel', 'cornelio', 1.82)
var jessica = new Persona('jessica', 'zuarts', 1.80)
var marcela = new Persona('marcela', 'peralta', 1.77)

// daniel.saludar()
// jessica.saludar()
// marcela.saludar()

// daniel.esAlto()
// jessica.esAlto()
// marcela.esAlto()