console.group('CUADRADO')
const ladoCuadrado = 5
console.log('Los lados del cuadrado miden:', ladoCuadrado + 'cm')

const perimetroCuadrado = ladoCuadrado * 4
console.log('El perimetro del cuadrado es:', perimetroCuadrado + 'cm')

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log('El area del cuadrado es:', areaCuadrado + 'cm^2')
console.groupEnd()


console.group('TRIANGULO')
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
console.log(
    'Los lados del cuadrado mide:', 
    ladoTriangulo1 + 'cm,', 
    ladoTriangulo2 + 'cm y', 
    baseTriangulo + 'cm'
)


const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log('El perimetro del Triangulo es:', perimetroTriangulo + 'cm')

const alturaTriangulo = Math.sqrt(Math.pow(ladoTriangulo1, 2) - Math.pow((baseTriangulo / 2), 2))
console.log('La altura del Triangulo es:', alturaTriangulo + 'cm')
const areaTriangulo = baseTriangulo * alturaTriangulo / 2
console.log('El area del Triangulo es:', areaTriangulo + 'cm^2')
console.groupEnd()

console.group('Circulos')
const radioCirculo = 4
console.log('El radio del circulo mide:', radioCirculo + 'cm')

const perimetroCirculo = 2 * Math.PI * radioCirculo
console.log('El perimetro del circulo es:', perimetroCirculo + 'cm')

const areaCirculo = Math.PI * Math.pow(radioCirculo, 2)
console.log('El area del circulo es:', areaCirculo + 'cm^2')

console.groupEnd()