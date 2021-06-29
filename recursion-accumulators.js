
function joinElements(array, joinString) { 
    //['s','cr','t cod',' :) :)']
    //'e'
    function recurse(index, resultSoFar) {
        resultSoFar += array[index];

        if(index === array.length -1) {
            return resultSoFar;
        }else {
            return recurse(index + 1, resultSoFar + joinString);
        }
    }
    return recurse(0, '');
}

//stack game
// function recurse(index, resultSoFar) {
//     //0 , ''
//     resultSoFar += array[index]; //'s'

//     if(index === array.length -1) {
//         return resultSoFar;
//     }else {
//         return recurse(index + 1, resultSoFar + joinString);
//     }
// }
// function recurse(index, resultSoFar) {
//     //0 , ''
//     resultSoFar += array[index]; //'s'

//     if(index === array.length -1) {
//         return resultSoFar;
//     }else {
//         return recurse(index + 1, resultSoFar + joinString);//1, 'se'
//     }
// }
// function recurse(index, resultSoFar) {
//     //1 , 'se'
//     resultSoFar += array[index]; //'secr'

//     if(index === array.length -1) {
//         return resultSoFar;
//     }else {
//         return recurse(index + 1, resultSoFar + joinString);//2, 'secre'
//     }
// }
// function recurse(index, resultSoFar) {
//     //2 , 'secr'
//     resultSoFar += array[index]; //'secret'

//     if(index === array.length -1) {
//         return resultSoFar;
//     }else {
//         return recurse(index + 1, resultSoFar + joinString);//2, 'secre'
//     }
// }
joinElements(['s','cr','t cod',' :) :)'],'e')