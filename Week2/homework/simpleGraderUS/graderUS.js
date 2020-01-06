const grader = (score) => {
    // Convert score in percentage string
    let percentage = `${score}%`;
    
    let grade;

    // Convert in american grading system
    if (score > 100) {
        score = prompt("ERROR: Please insert a valid score!");
        grader(score);
    } else if (score >= 90 && score <= 100) {
        grade = 'A';
    } else if (score >= 80 && score <90) {
        grade = 'B';
    } else if (score >= 70 && score <80) {
        grade = 'C';
    } else if (score >= 60 && score <70) {
        grade = 'D';
    } else if (score >= 50 && score <60) {
        grade = 'E';
    } else {
        grade = 'F';
    };

    // Print to the console the grede
    if (grade) {
        console.log(`You got a ${grade} (${percentage})!`);
    }
}

let score = prompt('Which was your score in the test?');
grader(score);