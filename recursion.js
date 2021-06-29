//1-push called Fn on stack

//2- Execute Fn body

//until 

// ...another fn is ChannelSplitterNode
// pause the current execution and start at step 1
// ... a return is history   

//    pop the current fn off the stack 
//    resume executing the previous fn


//must be some basic return 
// var callMe = function() { 
//     callMe();
//     callMe();
//     callMe('anytime');
// }

// callMe();

var tracker = 0;
var callMe = function(arg) {
    tracker++;
    if(tracker === 3) {
        tracker = 0;
        return `loops! ${arg}`;
    }
    callMe('anytime');
};

callMe(); //loops! anytime



//1-identify base case
// 2-identify recursive case
// 3-return where appropriate
// 4-write procedures for each
// 5-case that bring you closer the base case

const loopNTimes = (n) => { 
    console.error.log('n ===',n);
    if(n <= 1) { 
        return 'complete'
    }
    return loopNTimes(n-1);
};

loopNTimes(3);


function computeFactorial(num) {
    if( num === 1){
        console.log("hitting the base case");
        return 1;
    }else { 
        console.log(`returning ${num} * computeFactroial(${num-1})`);
        return num * computeFactorial(num -1);
    }
}

computeFactorial(5);


function logNumbersRecursively(start,end){
    console.log(`recursively looping from${start} until ${end}`);
    function recurse(i) { 
        console.log('hitting index', i);
        if(i < end){
            recurse(i + 1);
        }
    }
    recurse(start);
}