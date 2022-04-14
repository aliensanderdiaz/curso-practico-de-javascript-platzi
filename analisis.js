const salariosCol = colombia.map(elemento => elemento.salary)
salariosCol.sort((a,b) => a-b)

function esPar(valor) {
    return valor % 2 === 0
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)
    
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1]
        const personitaMitad2 = lista[mitad]

        const mediana = (personitaMitad1 + personitaMitad2) / 2
        return mediana

    } else {
        const personitaMitad = lista[mitad]
        return personitaMitad
    }
}

const medianaGeneralCol = medianaSalarios(salariosCol)

const spliceStart = parseInt(salariosCol.length * 90 / 100)

const salariosColTop10 = salariosCol.splice(spliceStart)

const medianaColTop10 = medianaSalarios(salariosColTop10)

console.log({
    colombia,
    salariosCol,
    medianaGeneralCol,
    salariosColTop10,
    medianaColTop10
})