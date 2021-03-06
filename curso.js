//Callbacks Clase 46
function cuadroCallback(value, callback){
    setTimeout(() => {
        callback(value, value * value)
    }, 1000)
}

cuadroCallback(0, (value, result) => {
    console.log(`Inicia Callback`);
    console.log(`Callback: ${value}, ${result}`);
    cuadroCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadroCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadroCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
            } )
        } )
    } )
} )


//Promesas Clase 47
function cuadradoPromesa(value){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value : value,
                result : value * value
            })
        }, 1000)
    })
}

cuadradoPromesa(10)
    .then((obj) => {
        console.log("Inicio promesa")
        console.log(`Promesa: ${obj.value}, ${obj.result}`)
        return cuadradoPromesa("Hola")
    })
    .then(obj => {
        console.log(`Promesa: ${obj.value}, ${obj.result}`)
        return cuadradoPromesa(2)
    })
    .then(obj => {
        console.log(`Promesa: ${obj.value}, ${obj.result}`)
        return cuadradoPromesa(3)
    })
    .then(obj => {
        console.log(`Promesa: ${obj.value}, ${obj.result}`)
        return cuadradoPromesa(4)
    })
    .catch(console.log(`El valor ingresado no es un numero`))


//Clase 48: Funciones asincronas - Lunes 5 de Julio del 2021
function cuadrado(value){
    if(typeof value !== "number"){
        return Promise.reject(`Error el valor "${value}" no es un numero`)
    }
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result : value * value
            })
        }, 1000)
    })
}

async function fucnonAsincrona(){
    try {
        console.log(`Inicio del async`)
        
        let obj = await cuadrado(1)
        console.log(`Async Function ${obj.value}, ${obj.result}`)
        
        obj = await cuadrado("Aqui dara un error")
        console.log(`Async Function ${obj.value}, ${obj.result}`)

    } catch (error) {
        console.log(`${error}`)
    }
}

fucnonAsincrona()


//Clase 49: Nuevos tipos de datos - Lunes 5 de Julio del 2021
const id = Symbol("id")
const id2 = Symbol("id")

console.log(id === id2)

const NOMBRE = Symbol("nombre")
const SALUDAR = Symbol("saludar")

const persona = {
    [NOMBRE]: "John"
}

persona.NOMBRE = "Valentin Alejandro"
console.log(persona)
console.log(persona.NOMBRE)
console.log(persona[NOMBRE])

persona[SALUDAR] = function(){
    console.log(`Hola`)
}

for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}


//Clase 50: Sets - Lunes 5 de Julio del 2021
let miSet = new Set([1,1,2,{},{},true, true, false])

console.log(`Recorriendo set`)
for (const item of miSet) {
    console.log(item)
}

console.log(`Recorriendo Set 2`)
let miSet2 = new Set()
miSet2.add(1)
miSet2.add("Hola")
miSet2.add(true)
miSet2.add({})

miSet2.forEach(item => console.log(`${item}`))

let arregloDelSet = Array.from(miSet2)
console.log(`${arregloDelSet}`)


//Clase 51: Mapas - Lunes 5 de Julio del 2021
let mapa = new Map()
mapa.set("nombre","Valentin Alejandro")
mapa.set("apellido", "Perez Zurita")
mapa.set("sexo", "no binario")

console.log(mapa)
console.log(mapa.has("correo"))
console.log(mapa.has("nombre"))
console.log(mapa.get("nombre"))

mapa.delete("apellido")
console.log(mapa)

for (const [key, value] of mapa) {
    console.log(`Llave ${key}, Valor ${value}`)    
}

const map2 = new Map(
    ["Nombre", "Kenai"],
    ["Edad", 3],
    ["Raza", "Negro"]
)

const llavesMapa = [...map2.keys()]
const valoresMapa = [...map2.values()]

console.log(llavesMapa)
console.log(valoresMapa)


//Clase 52:  Weakset - Martes 6 de Julio del 2021
const ws = new WeakSet()

let valor1 = {"valor" : 1}
let valor2 = {"valor" : 2}
let valor3 = {"valor" : 3}

ws.add(valor1)
ws.add(valor2)
ws.add(valor3)
console.log(ws)

setTimeout(() => {
    valor1 = null;
    valor2 = null;
    valor3 = null;
}, 5000)

const wm = new WeakMap()

let llave1 = {}
let llave2 = {}
let llave3 = {}

wm.set(llave1, 1)
wm.set(llave2, 2)


//Clase 53: Iteradores - Martes 6 de Julio
const iterable = [1,2,3,4,5,]
const iterador = iterable[Symbol.iterator]()

console.log(iterable)
console.log(iterador)

console.log(iterador.next())

let next = iterador.next()
while(!next.done){
    console.log(next.value)
    next = iterador.next()
}

//Clase 54 Generadores - Martes 6 de Julio
function* iterable(){
    yield "hola"
    console.log(`Hola consola`)
    yield "hola 2"
    console.log(`Seguimos con mas instrucciones`)
    yield "hola3"
}

let iteradordeGenerador = iterable();
console.log(iteradordeGenerador.next())
console.log(iteradordeGenerador.next())
console.log(iteradordeGenerador.next())

for(let y of iteradordeGenerador){
    console.log(y)
}

const arr = [...iterable()]
console.log(arr)

//Clase 55: Propiedades dinamicas - Miercoles 7 de Junio
const objUsuarios = {

}
const usuarios = ["Alejandro", "Canela", "Cinthia"]

usuarios.forEach((usuario, index) => objUsuarios[`id ${index}`] = usuario)

console.log(objUsuarios)


//Clase 56: This - Miercoles 8 de Junio
console.log(this === window)

this.nombre = "Contexto Globla"
console.log(this.nombre)

function imprimir(){
    console.log(this.nombre)
}

imprimir()

const objContext = {
    nombre : "Contexto Objeto",
    imprimir : imprimir
}
