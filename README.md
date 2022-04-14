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

## Capítulo 10 de 24 - Análisis: cómo calcular porcentajes y descuentos

## capítulo 11 de 24 - Crea una página web para calcular descuentos

## capítulo 12 de 24 - Escribiendo HTML desde JavaScript

## capítulo 13 de 24 - Reto: funciones más inteligentes

## capítulo 14 de 24 - Qué es promedio, moda y mediana

## capítulo 15 de 24 - Calculando el promedio en JavaScript

## capítulo 16 de 24 - Calculando la mediana en Javascript

## capítulo 17 de 24 - Calculando la moda en Javascript

## capítulo 18 de 24 - Reto: calcula otros tipos de promedio

## capítulo 19 de 24 - Análisis: cómo analizar salarios

## capítulo 20 de 24 - Calculando la mediana de salarios

## capítulo 21 de 24 - Calculando el top 10% de salarios

## capítulo 22 de 24 - Reto: simulacion de estudio de salarios

## capítulo 23 de 24 - deploy con github pages

## capítulo 24 de 24 - ¿Qué más puedes aprender de JavaScript?
