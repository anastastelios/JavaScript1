const grader = () => {
    let score = DOM_strings.inputBox.value
    // Convert score in percentage string
    let percentage = `${score}%`;
    
    let grade;

    // Convert in american grading system
    // and change the background color depending on the grade
    if (score > 100 || score < 0) {
        DOM_strings.resultBox.textContent = 'This is not a valid score!';
    } else if (score >= 90 && score <= 100) {
        grade = 'A';
        DOM_strings.body.style.background = "#00FF00";
    } else if (score >= 80 && score <90) {
        grade = 'B';
        DOM_strings.body.style.background = "#66ff00";
    } else if (score >= 70 && score <80) {
        grade = 'C';
        DOM_strings.body.style.background = "#ccff00";
    } else if (score >= 60 && score <70) {
        grade = 'D';
        DOM_strings.body.style.background = "#FFCC00";
    } else if (score >= 50 && score <60) {
        grade = 'E';
        DOM_strings.body.style.background = "#ff6600";
    } else {
        grade = 'F';
        DOM_strings.body.style.background = "#FF0000";
    };

    // Print the grade
    if (score <= 100 && score.length !== 0 && score > 0) {
        DOM_strings.resultBox.textContent = `You got ${grade} (${percentage})!`;
    } else if (score > 100 || score < 0) {
        DOM_strings.resultBox.textContent = 'This is not a valid score!';
        DOM_strings.body.style.background = "grey";
    } else {
        DOM_strings.resultBox.textContent = '---';
        DOM_strings.body.style.background = "white";
    };
};

// Seting some DOM manipulation shortcuts
const DOM_strings = {
    inputBox: document.querySelector('.input__score'),
    resultBox: document.querySelector('.result__grade'),
    body: document.querySelector('body')
}

// The main function that calls the EventListener
function main() {
    DOM_strings.inputBox.addEventListener('input', grader);
};

main();

// Question: if we had to use background-color with '-' what would we do so the code works?