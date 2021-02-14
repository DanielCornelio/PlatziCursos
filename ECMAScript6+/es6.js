// Default Params
// Antes de ES6
function newFunction (name, age, country) {
	var name = name || 'Juan';
	var age = age || 20;
	var country = country || 'Col';
	console.log(name, age, country);
}

//ES6
function newFunction2 (name = 'Juan', age = 20, country = 'Col') {
	console.log(name, age, country);
}

newFunction2(); // 'Juan', 20, 'Col
newFunction2('Maria', 23, 'Mx');

// Templates Literals
// Antes de ES6
var hello = 'hello';
var world = 'world';
var phrase = hello + ' ' + world;

// ES6
var phrase2 = `${hello} ${world}`;
/*Multilíneas*/
let lorem = 'Lorem ipsum dolor sit amet consectetur, adipiscing elit nullam.\n'
+ 'otra frase épica que necesitamos.';
//con es6
let lorem2 = `otra frase épica que necesitamos
ahora es otra frase épica
`;

console.log(lorem);
console.log(lorem2);

/*Desestructuración de elementos*/

let person = {
    'name':'oscar',
    'age':32,
    'country':'MX'
}
console.log(person.name, person.age);
//con es6
let {name,age,country} = person; //estoy señalando que voy a requerir estos elementos de mi objeto person
console.log(name,age,country);
//Ejemplo 2
let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria','Yesica','Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

// ** Uso de let en lugar de var **
var hola = 'hola'; //Originalmente haciamos esto y esta variable estaba disponible de forma global.
{
    var globalVar = 'Global Var';
}

{   
    //let solo está disponible en el bloque de código en el cual está definido
    let globalLet = 'Global Let';
    //esto si se va a imprimir porque los estoy haciendo dentro del scope
    console.log(globalLet + ' Dentro del scope')
}

console.log(globalVar);
//este no se va a imprimir porque lo estoy haciendo fuera del scope y por lo tanto no podré acceder
console.log(globalLet);

// ** const **

const a = 'b';
//con const no podré cambiar el valor si es que quiero asignarle otro string por ejemplo