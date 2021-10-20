
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
        soma = callback(soma,array[indice])
    }
    return soma 
}
console.log(newReduce(reduceA,arrayofNumbers))


/*-----------------SOME------------*/ 
function writeSome(item,indice, array){
    if(indice > 2 && item > 4){
        return true
    }
    {return false}
}
function newSome(callback,array){
    let boolean = false
    for(let indice = 0; indice<array.length; indice++){
        if(callback(array[indice],indice,array) === true){
            boolean = true
        }
    }
    return boolean
}

console.log(newSome(writeSome,arrayofNumbers))

/*--------------Every-----------------*/
function writeEvery(item, indice, array){
    if(indice > 2 && item > 4){
        return true
    }
    {return false}
}
function newEvery(callback,array){
    let boolean
    for(let indice = 0; indice < array.length; indice ++){
        if(writeEvery(array[indice],indice, array) === true){
            boolean = true
        }
        else{
            boolean = false
            break
        }
        return boolean
    }
}