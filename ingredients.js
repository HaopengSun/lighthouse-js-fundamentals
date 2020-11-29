const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

for (const ingredient of ingredients){
    console.log(ingredient);
}

let i = 0;
while(i < ingredients.length){
    console.log(ingredients[i]);
    i++
}

let j = ingredients.length - 1;
while(j >= 0){
    console.log(ingredients[j]);
    j--;
}