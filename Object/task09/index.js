/*4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/

function CulinareRecipe(
  name,
  type,
  complexity,
  listOfIngrendients,
  preparingTime,
  instuctions
) {
  this.name = name;
  this.type = type;
  this.complexity = complexity;
  this.listOfIngrendients = listOfIngrendients;
  this.preparingTime = preparingTime;
  this.instuctions = instuctions;
  this.change = function (cuisine) {
    return (this.type = cuisine);
  };
  this.is15M = function (preparingTime) {
    var isTime = this.reparingTime <= 15 ? "Yess" : "No";
    return isTime;
  };
  this.deleteIngredients = function (ingredient) {
    var changedListOfIngredients = [];
    for (var i = 0; i < this.listOfIngrendients.length; i++) {
      if (this.listOfIngrendients[i] != ingredient) {
        changedListOfIngredients[changedListOfIngredients.length] =
          this.listOfIngrendients[i];
      } else {
        continue;
      }
    }

    return (this.listOfIngredients = changedListOfIngredients);
  };
}

var piza = new CulinareRecipe(
  "Quatro Staqione",
  "Italy",
  "simple",
  [
    "jaja",
    "pirotski sir",
    "origano",
    "kecap",
    "kackavalj",
    "masline",
    "mleveno meso",
  ],
  13,
  "In the colinary"
);
piza.change("Juzna Srbija");

piza.deleteIngredients("masline");
piza.preparingTime = 22;
console.log(piza.is15M(22));

console.log(piza);
