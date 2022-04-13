# Curso Práctico de Javascript

## Capítulo 1 de 24 - Cuál es tu sueño con Javascript?

## Capítulo 2 de 24 - Prueba de Javascript

## Capítulo 3 de 24 - Configuración del entorno de desarrollo para JavaScript

## Capítulo 4 de 24 - Análisis: Cómo calcular figuras geométricas

## Capítulo 5 de 24 - Cómo integrar Javascript en HTML

- Definir las fórmulas
- Implementar las fórmulas en JavaScript
- Crear funciones
- Integrar JS con HTML

## Capítulo 6 de 24 - Calculando figuras geométricas en JavaScript

## Capítulo 7 de 24 - Encapsulando código en funciones

## Capítulo 8 de 24 - Interactuando con JavaScript desde HTML

## Capítulo 9 de 24 - Reto: matemáticas con JavaScript

	En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

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

