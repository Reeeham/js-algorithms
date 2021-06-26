const times10 = (n) => (n*10)

//Making your memo function generic and accept the times10 function as
// a callback rather than defining the n*10 logic inside the if/else or pulling it
//in from the global scope

// take advantage of the fact that parameters are saved in the closure as well
//just like the cache from the previous example
//to make returned function do any passed function to be generic
const memoize = (cb) => {
    //only cb and cache object is cached, cache object is like hashtable
    let cache = {}
    return (...args) => { //rest operator making it more generic
        if( n in cache) {
            console.log('fetching from cache',n)
            return cache[n]
        }else {
            console.log('calculation result')
            let result = cb(...args);//times10 divideby10 or any other function
            cache[n] = result
            return result
        }
    }
}
const  memoizedTimes10 = memoize(times10)

console.log('task 4')

try { 

    console.log('Task 4 calculated value ', memoizedTimes10(9)) //calculated
    console.log('Task 4 cached value ', memoizedTimes10(9))//cached

} catch(e){
    console.error('Task 4:', e)
}