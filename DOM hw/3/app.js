let recipeName = prompt("What is the name of your recipe?");

let numIngredients = prompt("How many ingredients do you need for your recipe?");

let ingredients = [];

for (var i = 0; i < numIngredients; i++) {
    ingredients.push(prompt("What is the name of ingredient #" + (i+1) + "?"));
}

var recipeHeading = document.createElement("h1");
recipeHeading.innerHTML = recipeName;
document.body.addToDom(recipeHeading);

let ingredientList = document.createElement("ul");

for (var i = 0; i < ingredients.length; i++) {
    var ingredientItem = document.createElement("li");
    ingredientItem.innerHTML = ingredients[i];
    ingredientList.addToDom(ingredientItem);
}
L
document.body.addToDom(ingredientList);