// Array of random items in French
// This will be a private property
var clothingItem = ["La chemise", "Le pantalon", "Le t-shirt", "La robe"];

// First method that adds a new string to the collection array
// This method will be exported for public use
export function addnewString() {
  clothingItem.push("La jupe");
  console.log(clothingItem);
}

// Second method that returns the number of items in the collection
// This method will be exported for public use
export function returnNumberItem() {
  console.log(clothingItem.length);
}