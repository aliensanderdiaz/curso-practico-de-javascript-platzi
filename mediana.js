const lista1 = [100,200,300,10000000000000, 400,300]

const mitadLista1 = lista1.length / 2

const listaEsPar = lista1.length % 2 === 0



let mediana
lista1.sort((a, b) => a - b)
if (listaEsPar) {
    mediana = ( lista1[ mitadLista1 - 1 ] + lista1[ mitadLista1 ] ) / 2
} else {
    mediana = lista1[ Math.floor(mitadLista1) ]
}

console.log({
    lista1,
    mitadLista1,
    listaEsPar,
    mediana
})