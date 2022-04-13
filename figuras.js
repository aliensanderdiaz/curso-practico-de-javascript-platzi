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

function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado')
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado')
    const value = input.value
    const area = areaCuadrado(value)
    alert(area)
}

function alturaTrianguloIsosceles(lado1, lado2, lado3) {

    const esTrianguloIsosceles = lado1 === lado2 || lado1 === lado3 || lado2 === lado3
    
    if (!esTrianguloIsosceles) {
        console.log({
            mensaje: 'No es un triangulo isosceles, No puedo calcular la altura'
        })
        return
    }

    let ladoIgual
    let base

    if (lado1 === lado2) {
        ladoIgual = lado1
        base = lado3
    }

    if (lado1 === lado3) {
        ladoIgual = lado1
        base = lado2
    }

    if (lado2 === lado3) {
        ladoIgual = lado2
        base = lado1
    }

    const altura = Math.sqrt(Math.pow(ladoIgual, 2) - Math.pow((base / 2), 2))

    console.log({
        mensaje: 'Es un triángulo isosceles y la altura es ' + altura + 'cm'
    })
}

alturaTrianguloIsosceles(1,2,3)
alturaTrianguloIsosceles(5,5,6)