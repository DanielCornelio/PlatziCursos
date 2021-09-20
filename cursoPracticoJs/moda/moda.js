const lista1 = [1,2,3,4,1,2,4,2,2,2,3]

const lista1Count = {}

lista1.map((el)=>{
    if(lista1Count[el]){
        lista1Count[el] += 1
    }else{
        lista1Count[el] = 1
    }
})

const listaArr = Object.entries(lista1Count)