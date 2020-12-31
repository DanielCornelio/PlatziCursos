function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.esAlto = function() {
    return this.altura >= 1.8
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)
Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
}

var daniel = new Persona('daniel', 'cornelio', 1.82)
var jessica = new Persona('jessica', 'zuarts', 1.80)
var marcela = new Persona('marcela', 'peralta', 1.77)

daniel.saludar()
jessica.saludar()
marcela.saludar()

daniel.esAlto()
jessica.esAlto()
marcela.esAlto()