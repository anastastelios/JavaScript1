const validityCheck = () => {
    // Receive card number
    let card_number = DOM_strings.inputBox.value

    // Convert in american grading system
    // and change the background color depending on the grade
    // if (score > 100 || score < 0) {
    //     DOM_strings.resultBox.textContent = 'This is not a valid score!';
    // } else if (score >= 90 && score <= 100) {
    //     grade = 'A';
    //     DOM_strings.body.style['background-color'] = "#00FF00";
    let cardInInt = parseInt(card_number, 10);
    let cardInStr = cardInInt.toString(10);
    let cardArray = card_number.split('');
    let cardArrayInt = card_number.split('').map(function (item) {
        return parseInt(item, 10);
    });
    let char1 = cardArray[0];
    let everyCard = cardArray.every(item => {
        return item === char1;
    })
    sum = 0;
    cardArrayInt.forEach(item => {
        sum += item;
    })

    // console.log(`${card_number.length} ==== ${cardInStr.length} ==== ${cardInStr}`);


    if (card_number.length !== cardInStr.length && char1 !== '0' && cardInStr !== 'NaN') {
        DOM_strings.resultBox.textContent = `Beware! There is some invalid character!`;
        DOM_strings.body.style['background-color'] = "yellow";
    } else if (card_number.length < 16) {
        DOM_strings.resultBox.textContent = `Put some more numbers please!`;
        DOM_strings.body.style['background-color'] = "white";
    } else if (card_number.length > 16) {
        DOM_strings.resultBox.textContent = `Relax mate... Too many numbers!!!`;
        DOM_strings.body.style['background-color'] = "red";
    } else if (cardInInt % 2 !== 0) {
        DOM_strings.resultBox.textContent = `Card number not valid!`
        DOM_strings.body.style['background-color'] = "red";
    } else if (everyCard) {
        DOM_strings.resultBox.textContent = `Impossible all the numbers the same...`
        DOM_strings.body.style['background-color'] = "red";
    } else if (sum < 16) {
        DOM_strings.resultBox.textContent = `Too small numbers. Not possible... Invalid!`
        DOM_strings.body.style['background-color'] = "yellow";
    } else if (card_number == '') {
        DOM_strings.resultBox.textContent = `Please insert your card number!`
        DOM_strings.body.style['background-color'] = "white";
    } else {
        DOM_strings.resultBox.textContent = `Thank you for the transaction!`
        DOM_strings.body.style['background-color'] = "#00FF00";
    }

};

// Seting some DOM manipulation shortcuts
const DOM_strings = {
    inputBox: document.querySelector('.card__number'),
    resultBox: document.querySelector('.validity__check'),
    body: document.querySelector('body')
}

// The main function that calls the EventListener
function main() {
    DOM_strings.inputBox.addEventListener('input', validityCheck);
};

main();