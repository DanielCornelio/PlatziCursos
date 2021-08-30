// codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");
function perimetroCuadrado(lado){
    return lado * 4
}

// console.log("el perimetro del cuadrado es: "+ perimetroCuadrado + "cm");
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado
}
// console.log("el area del cuadrado es: "+ areaCuadrado + "cm cuadrado");
console.groupEnd()

// Codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;



// console.log("Los lados del triangulo miden: "
//     + ladoTriangulo1 
//     + "cm, "
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm" );

//     const alturaTriangulo = 5.5;
//     console.log("Los la altura del triangulo es: "+ alturaTriangulo + "cm");
//     const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return ladoTriangulo1+ladoTriangulo2+baseTriangulo
}
//     console.log("El perimetro del triangulo es: "+ perimetroTriangulo + "cm");
//     const areaTriangulo = (baseTriangulo * alturaTriangulo)/2

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo)/2
}
//     console.log("El area del triangulo es: "+ areaTriangulo + "cm");

    
console.groupEnd()
// // Codigo circulo
// console.group("circulo");
// const radioCirculo = 4
// console.log("El radio del circulo es: "+ radioCirculo + "cm");
// const diametroCirculo= radioCirculo * 2
// console.log("El diametro del circulo es: "+ diametroCirculo + "cm");
function diametroCirculo(radioCirculo){
    return radioCirculo * 2
}
const PI = Math.PI
console.log("PI: "+ PI);

// const perimetroCirculo = diametroCirculo * PI
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}
// console.log("El perimetro del circulo es: "+ perimetroCirculo + "cm");

// const areaCirculo = (radioCirculo * radioCirculo) * PI
function areaCirculo(radio){
    return (radio * radio) * PI
}
  
// console.log("El area del circulo es: "+ areaCirculo + "cm");


console.groupEnd()

// Interactuamos con el HTML

function calcularPrimetroCudrado(){
   const input = document.getElementById('inputCuadrado').value
   const perimetro = perimetroCuadrado(input)
   alert(perimetro)
}
function calcularAreaCudrado(){
    const input = document.getElementById('inputCuadrado').value
    const area = areaCuadrado(input)
    alert(area)

 }