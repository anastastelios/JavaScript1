const calculateTotalPrice = obj => {
    sum = 0;
    for (let i in obj) {
        sum += obj[i];
    }
    sum = sum.toFixed(2);
    // sum = (Math.round(sum * 100) / 100).toFixed(2);
    return sum;
}

const cartForParty = {
    beers: 16.50,
    chips: 14.25,
    booze: 23.89,
    pizza: 18.35,
    juices: 9.15
}

console.log(`The total price is ${calculateTotalPrice(cartForParty)}`);