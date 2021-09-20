const lista1 = [1000,200,1,4000000]


function esPar(num){
    if(num % 2 === 0){
        return true
    }else{
        return false
    }
}


function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado+nuevoElemento

        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

function calcularMediana(lista){
    let ordenada = lista.sort( ( a, b )=>{ return a - b; } )
    const mitadLista1 = parseInt(ordenada.length / 2)

    let mediana;

    if (esPar(ordenada.length)) {
        console.log(ordenada.length)
        const elemento1 = ordenada[mitadLista1 - 1];
        const elemento2 = ordenada[mitadLista1];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    } else {
        mediana = ordenada[mitadLista1];
    }
}