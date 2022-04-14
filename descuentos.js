const precioOriginal = 120
const descuento = 18

const porcentajePrecioConDescuento = 100 - descuento

const precioConDescuento = precioOriginal * porcentajePrecioConDescuento / 100

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento

    const precioConDescuento = precio * porcentajePrecioConDescuento / 100

    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const price = document.getElementById('InputPrice').value
    const discount = document.getElementById('InputDiscount').value

    const priceWithdiscount = calcularPrecioConDescuento(price, discount)

    const ResultP = document.getElementById('ResultP')
    ResultP.innerText = `El valor del producto con descuento es $${ priceWithdiscount }`
}

function onClickButtonPriceDiscount2() {
    const price = document.getElementById('InputPrice2').value
    const discount = document.getElementById('InputDiscount2').value

    const priceWithdiscount = calcularPrecioConDescuento(price, discount)

    const ResultP2 = document.getElementById('ResultP2')
    ResultP2.innerText = `El valor del producto con descuento es $${ priceWithdiscount }`
}