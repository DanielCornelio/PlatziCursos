//Helpers

function esPar(numerito){
    return (numerito % 2 === 0)
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

//Calcularora de Mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad - 2];

    if(esPar(lista.length)){
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
        return mediana;
    }else{
        const personitaMitad = lista[mitad]
        return personitaMitad
    }
    
}

//Mediana general
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
)



const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB
    }
)


function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad - 2];

    if(esPar(lista.length)){
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
        return mediana;
    }else{
        const personitaMitad = lista[mitad]
        return personitaMitad
    }
    
}

const medianaGeneralCol = medianaSalarios(salariosColSorted)



console.log({medianaGeneralCol, medianaTopCol})