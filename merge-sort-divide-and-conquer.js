
//recursive calls to a subset of the problem 
//0- recognize base case 
//1- Divide break problem down during each call
//2-conquer: Do work on each subset
//combine :solutions


//pseudocode: Merge Routine

ChannelMergerNode(L,R)
//[3,27] //[9,10]
//[3,9,10,27]
//initialize empty array 
//compare the first index of the left array 
//to the first index of the right array 
//push the lower value to empty array 
//shift the array with the lower value
//repeat until both arrays are empty 
//O(nlogn)
const mergeSort = (list) => {
    if(list.length < 2) return list;
    const middle = Math.floor(a.length / 2);
    const leftList  = list.slice(0, middle);
    const rightList = list.slice(middle, a.length);
    const lSorted = mergeSort(leftList);
    const rSorted = mergeSort(rightList);
    return mergeLists(lSorted,rSorted);
}

const mergeLists = (l1, l2) => {
    const mergedList = [];

    while(l1.length && l2.length) {
        mergedList.push(l1[0] > l2[0] ? l2.shift() : l1.shift())
    }
    //if we still have values let's add them at the end of mergedList
    while(l1.length){
        mergedList.push(l1.shift());
    }
    while(l2.length) {
        mergedList.push(l2.shift());
    }
    return mergedList;
}