const lista1 = [
    1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,3,3,4,5,6,1,5,8,2,1,3,6,4,2,8,9,6
]

const lista1Count = {

}

lista1.map(
    function(elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1
        } else {
            lista1Count[elemento] = 1
        }
    }
)

console.log({
    lista1Count
})

let cantidades = Object.entries(lista1Count)
cantidades.sort((a, b) => a[1] - b[1])

let masVeces = cantidades[ cantidades.length - 1 ][1]

console.log({
    cantidades,
    masVeces
})

let arrayModa = cantidades.filter(element => element[1] === masVeces)

console.log({
    arrayModa
})
