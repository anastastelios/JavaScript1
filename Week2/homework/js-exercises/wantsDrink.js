let drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

let count = 0;
for (let i = 0; i < 5; i++) {
    if (drinkTray[i-1] === drinkTray[i-2] && drinkTray[i-1] !== undefined) {
        let j = drinkTypes.indexOf(drinkTray[i-1]);
        drinkTray.push(drinkTypes[j+1]);
        count++;
    } else {
        drinkTray.push(drinkTypes[count]);
    }
}

console.log('Hey guys, I bought a ' + drinkTray[0] + ', a ' + drinkTray[1] + ', a ' + drinkTray[2] + ', a ' + drinkTray[3] + ' and a ' + drinkTray[4]);