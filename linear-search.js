// TASK: Implement linear search.

function linearSearch(list, item) {
    list.forEach((listItem, i) => {
        let index = -1;
        if(listItem == item) {
            index = i;
        }
    });
    return index;

}

linearSearch([2,6,7,90,103], 90);