function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado(lado) {
    return Math.pow(lado, 2)
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

function diametroCirculo(radio) {
    return 2 * radio
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * Math.PI
}

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2)
}
