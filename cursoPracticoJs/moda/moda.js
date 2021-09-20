const lista1 = [1,2,3,1,1,2,4,2,2,2,3]
const data = [2,2,2,2,1,1,1,1,1,1,1,1,4,4,4,4,2,5,6,6,7,7]

function moda(lista){
const listaCount = {}

lista.map((el)=>{
    if(listaCount[el]){
        listaCount[el] += 1
    }else{
        listaCount[el] = 1
    }
})

const listaArr = Object.entries(listaCount).sort((valorAcumulado, nuevoValor)=>{
    return valorAcumulado[1] - nuevoValor[1]
})

const moda = listaArr[listaArr.length -1]
    return moda
}