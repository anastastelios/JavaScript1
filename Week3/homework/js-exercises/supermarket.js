const addToShopingCard = item => {
    groceryList.push(item);
    if (groceryList.length > 3) {
        groceryList.shift();
    }
    console.log(`You bougth ${groceryList}`);
}

let groceryList = ['bananas', 'milk'];

addToShopingCard('apples');
addToShopingCard('tomatoes');
addToShopingCard('bread');