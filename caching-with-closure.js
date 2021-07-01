
const times10 = (n) =>(n*10) 

const memoizedClosureTimes10 = () => {
    //the only reason for parent function is to make cache private from local scope
    let cache = {} // u can use map instead to store another key types than string in object
    return (n) => { 
        if( n in cache) {
            console.log('fetching from cache', n)
            return cache[n]
        }else {
            console.log('Calculating result')
            let result = n * 10
            cache[n] = result 
            return result
        }
    }
};


//our goal here is to clean our global scope by moving your cache inside your function
//use  aclosure to return a function that you can call later
//in a closure you can remember prior values
const memoClosureTimes10 = memoizedClosureTimes10();


console.log('Task 3')
try {
    console.log('Task 3 calculated value',memoClosureTimes10(9))//calculated
    console.log('Task 3 cached value',memoClosureTimes10(9))//cached
}catch(e) {
    console.error('Task 3', e)
}
