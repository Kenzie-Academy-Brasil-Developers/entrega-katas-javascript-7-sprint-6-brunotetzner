
let arrayofNumbers = [1, 4, 5, 6, 4, 7, 11]

/*-----------------------------forEach-----------------------------------*/
function writeMyForEach(valor, indice,array) {
    return (`O valor é ${valor}, o indice dele é ${indice}, e o array é ${array}`)
}
Array.prototype.newForEach = function(callback) {
    for (let indice = 0; indice < this.length; indice++) {
        callback(this[indice], indice, this)
    }
}
console.log('FOREACH         ',arrayofNumbers.newForEach(writeMyForEach))

//retornando undefined

/*--------------------------------map------------------------------------*/

function writeMyMap(valor, indice, array) {
    return `o valor é ${valor}, o indice é ${indice}, e o array é ${array}`

}
Array.prototype.newMap = function(callback) {
    let newarray = []
    for (let indice = 0; indice < this.length; indice++) {
        const result = callback(this[indice], indice, this)
        newarray.push(result)
    }
    return newarray
}
console.log('MAP           ',arrayofNumbers.newMap(writeMyMap))

//------------------------filter---------------------------------------------//
function writeMyFilter(number, indice, array) {
    if (number > 4) {
        return number
    }
}
Array.prototype.newFilter = function(callback) {
    let newarray = []
    for (let indice = 0; indice < this.length; indice++) {
        const result = callback(this[indice])
        if (result !== undefined) {
            newarray.push(result)
        }
    }
    
    return newarray
}
console.log('FILTER        ',arrayofNumbers.newFilter(writeMyFilter))

//---------------------------FIND--------------------------//
function writeFind(item, index, array) {
    if (item > 10) {
        return `${item}[${index}] do array ${array}`
    }
}

Array.prototype.newFind = function(callback, array) {
    for (let indice = 0; indice < this.length; indice++) {
        const result = callback(this[indice],indice, this)
        if (result !== undefined) {
            return result
        }
    }
}
console.log('FIND      ',arrayofNumbers.newFind(writeFind))

//----------- FIND-INDEX------------------

function writeFindindex(number, indice) {
    if (number > 10) {
        return indice
    }
}
Array.prototype.newFindIndex = function(callback) {
    for (let indice = 0; indice < this.length; indice++) {
        const result = callback(this[indice], indice)
        if (result !== undefined) {
            return result

        }
        else if (indice === this.length - 1 && result === undefined) {
            return -1

        }
    }
}
console.log('FINDINDEX     ',arrayofNumbers.newFindIndex(writeFindindex))

/*---------------Reduce--------------------*/

function reduceA(acumulador, valorAtual) { return acumulador + valorAtual; }
Array.prototype.newReduce = function(callback) {
    let soma = 0
    for (let indice = 0; indice < this.length; indice++) {
        soma = callback(soma, this[indice])
    }
    return soma
}
console.log('REDUCE      ',arrayofNumbers.newReduce(reduceA))


/*-----------------SOME------------*/
function writeSome(item, indice, array) {
    if (indice > 2 && item > 4) {
        return true
    }
    { return false }
}
Array.prototype.newSome = function(callback) {
    let boolean = false
    for (let indice = 0; indice < this.length; indice++) {
        if (callback(this[indice], indice, this) === true) {
            boolean = true
        }
    }
    return boolean
}

console.log('SOME        ',arrayofNumbers.newSome(writeSome))

/*--------------Every-----------------*/
function writeEvery(item, indice, array) {
    if (item > 0 && indice >= 0) {
        return true
    }
    { return false }
}
Array.prototype.newEvery = function(callback) {
    let boolean
    for (let indice = 0; indice < this.length; indice++) {
        if (callback(this[indice], indice, this) === true) {
            boolean = true
        }
        else {
            boolean = false
            break
        }
    }
    return boolean

}
console.log('EVERY      ',arrayofNumbers.newEvery(writeEvery,))
/*----------------------- FILL -------------*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

Array.prototype.NewFill = function(newElement, play, end) {
    if (play === undefined) {
        play = 0;
    }
    if (end === undefined) {
        end = this.length - 1
    }
    else if (end > this.length - 1) {
        end = this.length - 1
    }
    for (let indice = play; indice <= end; indice++) {
        this[indice] = newElement
    }
    return fruits
}

console.log('FILL        ',fruits.NewFill('Kiwi',2,5))

/*----------------includes--------------*/
Array.prototype.newIncludes = function(item) {
    let boolean = false
    for (let indice = 0; indice < this.length; indice++) {
        if (this[indice] === item) {
            boolean = true
        }
    }
    return boolean
}
console.log('INCLUDES        ',arrayofNumbers.newIncludes(1,))

/*--------------indexOf*/
let arrayToIF = [1,2,3,4,5,6,7,8]
Array.prototype.newIndexOf = function( item, play, end) {
    if (play === undefined) {
        play = 0
    }
    if (end === undefined) {
        end = this.length - 1
    }
    else if (end > this.length - 1) {
        end = this.length - 1;
    }

    for (let indice = play; indice <= end; indice++) {
        if (this[indice] === item) {
            return indice
        }
    }
    return -1
}
console.log('INDEXOF        ',arrayToIF.newIndexOf(8))

/*-------------------concat-----------------*/
let fruit = ['maça', 'banana', 'pera', 'uva']
let WeekDays = ['segunda', 'terça', 'quarta', 'quinta', 'sexta']

Array.prototype.newConcat = function(arrayConcat) {
    for (let indice = 0; indice < arrayConcat.length; indice++) {
        this.push(arrayConcat[indice])
    }
    return this
}

console.log('CONCAT        ',fruit.newConcat(WeekDays))

/*-----------------------Join--------------------------------------*/
function newJoin(array, caracter) {
    if (caracter === undefined) {
        caracter = ','
    }
    let string = array[0]
    for (let indice = 1; indice < array.length; indice++) {
        string += `${caracter}${array[indice]}`
    }
    return string
}

console.log('JOIN        ',newJoin(arrayofNumbers,'------'))

/*-----------------------slice------------------------------------*/
let arrayToSlice = [1,2,3,4,5,6,7,8]
Array.prototype.newSlice = function(start,end){
    if(start === undefined){
        start = 0;
    }
    if(end  === undefined){
        end = this.length
    }
    else if(end > this.length){
        end = this.length 
    }
    let finalArray = []
    for (let indice = start; indice <end;indice++){
        finalArray.push(this[indice])
    }
    return finalArray
}
console.log('SLICE        ',arrayToSlice.newSlice(3,70))
