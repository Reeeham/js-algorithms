const uniqueSort = function(arr) {
    const breadcrumbs = {}
    const result = [arr[0]]
    for (let i = 0; i < array.length; i++) {
        //start loop at 1 as element 0 can never be a duplicate 
        if(!breadcrumbs[i]) {
            result.push(arr[i])
            breadcrumbs[arr[i]] = true
        }
    }
    return result.sort((a,b) => a-b)
}

console.log([4,2,2,3,2,2,2]) //[2,3,4]

const getMinMax = function (arr) {
    arr.sort((a,b) => a-b)
    return {min: arr[0],max: arr[arr.length-1]}
}

console.log(getMinMax([5,5,6,2,4,3]))


var countChars = function(str) {
    return str.length;
}

const getOneDigit = function(n) {
    let asStr = n.toString()
    let sum = asStr.split('').reduce((a,b) => {a+= parseInt(b); return a},0)
    return sum >= 10 ? getOneDigit(sum) : sum;
}

console.log(getOneDigit(456))