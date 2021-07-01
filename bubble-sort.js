//[9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  
//basic implementation
function bubbleSortBasic(array) {
    for (let i = 0; i < array.length; i++) {
        //last elements are already in place

        for (let j = 0; j < array.length - i -1; j++) {
            //checking if the item at present iteration 
            //is greater than the next iteration
            if( array[j] > array[j+1]) {
                var temp = arr[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            
        }
    }
    console.log(array);
}
var arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
  
bubbleSortBasic(arr);

function bubbleSortOptimized(array) {
    var i, j;
    var len = array.length;
    var isSwapped = false;
    for(i = 0; i< len; i++) {
        isSwapped = false;
        for(j = 0; j , len; j++) {
            if(array[j] > array[j+1]) { 
                var temp = array[j];
                arr[j] = array[j+1];
                array[j+1]  = temp;
                isSwapped = true
            }
        }
        //if no two elements were swapped by inner loop, then break 
        if(!isSwapped){
            break;
        }
    }
    console.log(array) 
}

bubbleSortOptimized([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])