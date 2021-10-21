
let arrayofNumbers = [1, 4, 5, 6, 4, 7, 11]

/*-----------------------------forEach-----------------------------------*/
function writeMyForEach(valor, indice, array) {
    console.log(`O valor é ${valor}, o indice dele é ${indice}, e o array é ${array}`)
    console.log('------------------------------------------------------------------')
}
function newForEach(callback, array) {
    for (let indice = 0; indice < array.length; indice++) {
        callback(array[indice], indice, array)
    }
}
//newForEach(writeMyForEach,arrayofNumbers)



/*--------------------------------map------------------------------------*/

function writeMyMap(valor, indice, array) {
    return `o valor é ${valor}, o indice é ${indice}, e o array é ${array}`

}
function newMap(callback, array) {
    let newarray = []
    for (let indice = 0; indice < array.length; indice++) {
        const result = callback(array[indice], indice, array)
        newarray.push(result)
    }
    return newarray
}
//console.log(newMap(writeMyMap,arrayofNumbers))

//------------------------filter---------------------------------------------//
function writeMyFilter(number, indice, array) {
    if (number > 4) {
        return number
    }
}
function newFilter(callback, array) {
    let newarray = []
    for (let indice = 0; indice < array.length; indice++) {
        const result = writeMyFilter(array[indice])
        if (result !== undefined) {
            newarray.push(result)
        }
    }
    return newarray
}
//console.log(newFilter(writeMyFilter,arrayofNumbers))

//---------------------------FIND--------------------------//
function writeFind(number) {
    if (number > 10) {
        return number
    }
}

function newFind(callback, array) {
    for (let indice = 0; indice < array.length; indice++) {
        const result = callback(array[indice])
        if (result !== undefined) {
            return result
        }
    }
}
//console.log(newFind(writeFind,arrayofNumbers))

//----------- FIND-INDEX------------------

function writeFindindex(number, indice) {
    if (number > 10) {
        return indice
    }
}
function newFindIndex(callback, array) {
    for (let indice = 0; indice < array.length; indice++) {
        const result = callback(array[indice], indice)
        if (result !== undefined) {
            return result

        }
        else if (indice === array.length - 1 && result === undefined) {
            return -1

        }
    }
}
//console.log(newFindIndex(writeFindindex,arrayofNumbers))

/*---------------Reduce--------------------*/

function reduceA(acumulador, valorAtual) { return acumulador + valorAtual; }
function newReduce(callback, array) {
    let soma = 0
    for (let indice = 0; indice < array.length; indice++) {
        soma = callback(soma, array[indice])
    }
    return soma
}
//console.log(newReduce(reduceA,arrayofNumbers))


/*-----------------SOME------------*/
function writeSome(item, indice, array) {
    if (indice > 2 && item > 4) {
        return true
    }
    { return false }
}
function newSome(callback, array) {
    let boolean = false
    for (let indice = 0; indice < array.length; indice++) {
        if (callback(array[indice], indice, array) === true) {
            boolean = true
        }
    }
    return boolean
}

//console.log(newSome(writeSome,arrayofNumbers))

/*--------------Every-----------------*/
function writeEvery(item, indice, array) {
    if (item > 0 && indice >= 0) {
        return true
    }
    { return false }
}
function newEvery(callback, array) {
    let boolean
    for (let indice = 0; indice < array.length; indice++) {
        if (callback(array[indice], indice, array) === true) {
            boolean = true
        }
        else {
            boolean = false
            break
        }
    }
    return boolean

}
//console.log(newEvery(writeEvery,arrayofNumbers))
/*----------------------- FILL -------------*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

function NewFill(array, newElement, play, end) {
    if (play === undefined) {
        play = 0;
    }
    if (end === undefined) {
        end = array.length - 1
    }
    else if (end > array.length - 1) {
        end = array.length - 1
    }
    for (let indice = play; indice <= end; indice++) {
        array[indice] = newElement
    }
    return fruits
}

//console.log(NewFill(fruits,'Kiwi',2,5))

/*----------------includes--------------*/
function newIncludes(item, array) {
    let boolean = false
    for (let indice = 0; indice < array.length; indice++) {
        if (array[indice] === item) {
            boolean = true
        }
    }
    return boolean
}
//console.log(newIncludes(1,arrayofNumbers))

/*--------------indexOf*/
function newIndexOf(array, item, play, end) {
    if (play === undefined) {
        play = 0
    }
    if (end === undefined) {
        end = array.length - 1
    }
    else if (end > array.length - 1) {
        end = array.length - 1;
    }

    for (let indice = play; indice <= end; indice++) {
        if (array[indice] === item) {
            return indice
        }
    }
    return -1
}
//console.log(newIndexOf(arrayofNumbers,1))

/*-------------------concat-----------------*/
let fruit = ['maça', 'banana', 'pera', 'uva']
let WeekDays = ['segunda', 'terça', 'quarta', 'quinta', 'sexta']

function newConcat(array, arrayConcat) {
    for (let indice = 0; indice < arrayConcat.length; indice++) {
        array.push(arrayConcat[indice])
    }
    return array
}

//console.log(newConcat(fruit, WeekDays))

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

//console.log(newJoin(arrayofNumbers,'------'))

/*-----------------------slice------------------------------------*/
let arrayToSlice = [1,2,3,4,5,6,7,8]
function newSlice(array, start,end){
    if(start === undefined){
        start = 0;
    }
    if(end  === undefined){
        end = array.length
    }
    else if(end > array.length){
        end = array.length 
    }
    let finalArray = []
    for (let indice = start; indice <end;indice++){
        finalArray.push(array[indice])
    }
    return finalArray
}
//console.log(newSlice(arrayToSlice,0,70))
