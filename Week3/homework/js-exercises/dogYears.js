const calculateDogAge = age => {
    console.log(`Your dog is ${age * 7} dog years old.`)
}

for (let i of [3, 7, 13]) {
    calculateDogAge(i);
}
