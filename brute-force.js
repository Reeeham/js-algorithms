const coins = [10,6,1];

const makeChange = (value) => { //12
    if(value === 0) return 0;
    let minCoins; 
    coins.forEach((coin) => { //10
        if(value - coin >= 0) { //2
            let currMinCoins = makeChange(value - coin);
            if(minCoins === undefined || currMinCoins < minCoins) { 
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1;
}
