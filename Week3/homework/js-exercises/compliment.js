const giveCompliment = name => {
    compliments = ['great', 'awesome', 'amazing', 'congrats', 'supergeil', 'prima', 'bravo', 'και γαμώ', 'φίνα', 'υπέροχα'];
    let i = Math.floor(Math.random() * 10);
    console.log(`${compliments[i]} ${name}!`);
}

for (let i = 0; i < 3; i++) {
    giveCompliment(`Stelio`);
}