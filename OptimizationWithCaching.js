const uniqueSort = function(arr) {
    const breadcrumbs = {}
    const result = []
    for (let i = 0; i < array.length; i++) {

        if(!breadcrumbs[i]) {
            result.push(arr[i])
            breadcrumbs[arr[i]] = true
        }
    }
    return result.sort((a,b) => a-b)//ascending order
}


//function times 10 that takes an argument n and multiplies n times 10 
// a simple multiplication fn 
const times10 = (n) => {
    return n*10;
}

console.log('Task1')
console.log('times10 returns:', times10)

//use object to cache the results of your times10 function 
//create a fn that checks if the value for n has been calculated before
//if the value for n has not been calculated, calculate and then save the 
//result in the cache object

const cache = {};

const memoTimes10 = (n) => {
    if( n in cache) { 
        console.log('fetching from cache',n)
        return cache[n]
    }else {
        console.log('Calculating result')
        let result = times10(n)
        cache[n] = result;
        return result;
    }
}

console.log('Task2')
console.log('Task2 calculated value',memoTimes10(9))//calculated
console.log('Task2 calculated value',memoTimes10(9))//cached