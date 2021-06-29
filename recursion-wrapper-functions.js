function wrapperFnLoop(start, end) {
    function recurse(i) { 
        console.log(`looping from ${start} until ${end}`);
        if(i < end) {
            recurse(i + 1);
        }
    }
//this using a closure in recursion 
    recurse(start);
}

//but this not using a closure
function MemoFnLoop(i, end) {
    console.log(`looping from ${i} until ${end}`);
    if(i < end) {
        MemoFnLoop(i + 1, end);
    }
}