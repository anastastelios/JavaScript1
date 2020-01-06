let mealRecipe = {
    title: 'Omelete',
    servings: 2,
    ingredients: ['4 eggs', '2 strips of baccon', '1 tsp salt/pepper']
};

for (let i in mealRecipe) {
    console.log(`${i}: ${mealRecipe[i]}`);
}