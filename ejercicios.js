//Ejercicios clase 35 1 de Julio del 2021

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const contarCaracteres = (cadena = "") => 
    (!cadena)
        ?console.warn("No ingresaste una cadena de texto.")
        :console.info(`La cadena tiene "${cadena.length}" caracteres`)

contarCaracteres("Hola mundo")
contarCaracteres()


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const recortarCaracteres = (cadena = "", caracteresACortar = undefined) => 
    (!cadena)
        ?console.warn("No ingresaste una cadena de texto")
        :(caracteresACortar === undefined)
            ?console.warn("No ingresaste el numero de caracteres a recortar")
            :console.log(`${cadena.slice(0, caracteresACortar)}`)
            
recortarCaracteres("Hola mundo", 4);
recortarCaracteres();
recortarCaracteres("Hola")


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const cadenaALista = (cadena = "", caracter) =>
    (!cadena)
        ?console.warn("No ingresaste una cadena de texto")
        :console.log(` = ${cadena.split(caracter)}`)

cadenaALista("Hola como estas?", " ")


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetirTexto = (cadena = "", numeroVeces = undefined) => {
    if(!cadena) return console.warn("La cadena de texto esta vacia")
    if(numeroVeces === undefined) return console.warn("Se debe indicar un numero el numero de veces que se desea repetir el texto")
    if(Math.sign(numeroVeces) === -1) return console.error("El numero no puede ser negativo");
    for(let i=0; i < numeroVeces; i++){
        console.log(`${cadena}, ${i + 1}`)
    };
} 

repetirTexto("Hola mundo", 10)
repetirTexto("Hola mundo")
repetirTexto("Hola mundo", -10)

//Ejercicios clase 36 1 de Junio del 2021

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const reverseString = (string = "") => 
    (!string)
        ? console.warn("Porfavor ingresa una cadena de texto")
        : console.log(string.split("").reverse().join(""))

reverseString("Hola mundo")
    
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const encontrarPalabraRepetida = (cadena = "", palabra = "") => {

    if (!cadena) return console.warn("La cadena esta vacia");
    if (!palabra) return console.warn("No ingresaste una palabra a buscar");
    
    let i = 0;
    let contador = 0;

    while(i !== -1){
        i = cadena.indexOf(cadena, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }

    return console.info(contador);

}

encontrarPalabraRepetida("Hola mundo mundo tu mundo", "mundo")


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (palabra = "") => {
    if(!palabra) return console.warn("No ingresaste ninguna palabra")

    let palabraMinusculas = palabra.toLowerCase()
    let palindromo = palabraMinusculas.split("").reverse().join("")

    return(palabraMinusculas === palindromo)
        ? console.info(`Si es palindromo, palabra original ${palabraMinusculas}, palabra al reves ${palindromo}`)
        : console.info(`No es palindromo, palabra original ${palabraMinusculas}, palabra al reves ${palindromo}`)
}

palindromo("salas")


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarCaracteres = (texto = "", patron = "") => 
    (!texto)
        ?console.warn("No ingresaste un texto")
        :(!patron)
            ?console.warn("No ingresaste ningun patron de caracteres")
            :console.info(texto.replace(new RegExp(patron, "ig"), ""))

eliminarCaracteres()
eliminarCaracteres("ab0, ab1, ab2", "ab")


//Ejercicos clase 37 2 de Julio del 2021

//Programa una funcion que obtenga un numero aleatorio entre 501 y 600

const numeroAleatorio = () => {
    let randomNumer =  500 + Math.round(Math.random() * 100) 
    return console.info(`${randomNumer}`)
}

numeroAleatorio()
numeroAleatorio()
numeroAleatorio()

//Numero capicua
const numeroAlReves = (numero = 0) => {
    if(!numero) return console.warn("No ingresaste un numero")

    if(typeof numero !== "number") return console.error(`El valor "${numero}, NO es un numero"`)

    numero = numero.toString()
    let alreves = numero.split("").reverse().join("")

    return(numero === alreves)
        ?console.log(`Si es capicual, numero original ${numero}, numero al reves: ${alreves}`)
        :console.log(`No es capicual, numero original ${numero}, numero al reves: ${alreves}`)
}

numeroAlReves(202)
numeroAlReves(100)
numeroAlReves()

//Ejercicios clase 37 2 de Julio del 2021
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numeroPrimo = (numero) => {

    if(numero === undefined) console.warn("No ingresaste un numero")

    if(typeof numero !== "number") return console.error("No ingresaste un numero")

    if(numero === 1) return console.error("El numero no puede ser 1")

    if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo")

    let divisible = false;

    for(let i = 2; i < numero; i++){
        if(numero%i === 0){
            divisible = true
            break
        }
    }

    return (divisible)
        ?console.log(`El numero ${numero}, No es primo`)
        :console.log(`El numero ${numero}, Si es primo`)
}

numeroPrimo(1)
numeroPrimo(200)
numeroPrimo(33)


// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const numeroParOImpar = (numero = undefined) => {

    if(numero === undefined) console.warn("No ingresaste un numero")

    if(typeof numero !== "number") return console.error("No ingresaste un numero")

    return(numero % 2 === 0)
        ?console.log("El numero es par")
        :console.log("El numero es impar")
}

numeroParOImpar(3)
numeroParOImpar(2)


// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F
const convertiGrados = (grados = undefined, unidad = undefined) => {

    if(grados === undefined) console.warn("No ingresaste los grados")
    
    if(typeof grados !== "number") return console.error("No ingresaste un numero")
    
    if(unidad === undefined) console.warn("No ingresaste la unidad")
    
    if(typeof unidad !== "string") return console.error("La unidad debe ser del tipo textdddddo")

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido")

    if(unidad === "C"){
        return console.info(`${grados}C = ${Math.round((grados * (9/5) + 32 ))}F`)
    }else if (unidad === "F"){
        return console.info("Tengo sueño son la 00:55 am")

    }
    
}

convertiGrados()
convertiGrados("2")
convertiGrados(2)
convertiGrados(2, '$')
convertiGrados(35, "C")

//Ejercicios clase 39 3 de Julio del 2021
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const convertirNumeroABinario = (numero = undefined, base = undefined) => {
    //Validaciones
    if(numero === undefined) return console.warn("No ingresaste un numero a convertir")
    if(base === undefined) return console.warn("No ingresaste la base")
    if(typeof numero !== "number") return console.error(`El valor ${numero} no es un numero`)
    if(typeof base !== "number") return console.error(`El valor ${base} no es un numero`)
    //Conversiones
    if(base === 2){
        return console.info(`El numero ${numero} base ${base} es igual a: ${parseInt(numero, base)} base 10`)
    }
    if(base === 10){
        return console.info(`El numero ${numero} base ${base} es igual a: ${numero.toString(2)} binario `)
    }
    else{
        return console.error("La base no es valida")
    }
}

convertirNumeroABinario()
convertirNumeroABinario(100, 2)
convertirNumeroABinario(3030324, 10)


// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const aplicarDescuente = (cantidad = undefined, desceunto = 0) => {
    
    //Validaciones
    if(cantidad === undefined) return console.warn("No ingresaste la cantidad")
    if(cantidad === 0) return console.error("El monto no puede ser 0")
    if(typeof cantidad !== "number") return console.error(`El valor ${cantidad} no es valido`)
    if(typeof desceunto !== "number") return console.error(`El valor ${desceunto} no es valido`)
    if(Math.sign(desceunto) === -1) return console.error("El descuento no puede ser negativo")
    if(Math.sign(cantidad) === -1) return console.error("El monto no puede ser negativo")
    if(desceunto > 100) return console.error("El descuento no puede ser mayor a 100")

    //Operaciones
    let precioConDescunto = cantidad * ((100 - desceunto)/100)
    
    if(precioConDescunto !== undefined || precioConDescunto === NaN){
        console.info(`La precio ${cantidad} despues del descunto de ${desceunto} es de ${precioConDescunto}`)
    }else{
        console.error("Ha ocurrido un error")
    }

}

aplicarDescuente()
aplicarDescuente("dfdf", 0)
aplicarDescuente(100, 20)
aplicarDescuente(232435345345, 30434)


// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).


//Clase 40 3 de Julio del 2021
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.



// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.