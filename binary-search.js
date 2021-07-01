function binarySearch(list, item) {
    var min = 0;
    var max = list.length -1; // 5
    var guess;

    while(min <= max) {
        guess = Math.floor((min + max) / 2);//we will start at the middle
        if(list[guess] === item) {
            return guess;
        } else {
            if(list[guess] < item) {
                min = guess +1;
            } else {
                max = guess -1;
            }
        }
    }
    return -1;
}

binarySearch([2,6,7,90,103], 90);