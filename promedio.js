const lista1 = [
    100, 200, 300, 400
]



function calcularMediaAritmetica(lista) {
    // let sumaLista = 0

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[ i ]
    // }

    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento)

    const promedio = sumaLista / lista.length

    return promedio
}

console.log({
    lista1,
    promedio: calcularMediaAritmetica(lista1)
})