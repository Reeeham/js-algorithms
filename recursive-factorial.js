//write your own recursive factorial method

//use your memo function from the previous exercise to memoize your 
//factorial method

const factorial = memoFunc((n) =>  {
    if(n == 0) {
        return 1;
    }else { 
        return   n * factorial(n-1);
    }
  
 });


const memoize = (fun) => { 
    let cache = {};
    return (...args) => {
        let n = args[0];
        if(n in cache) {
            console.log("Fetching from cache...")
            return cache[n];
        } else {
            console.log("Fetching result...")
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

console.log(factorial(5));