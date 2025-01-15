//DEMO BLOCKING VS NON-BLOCKING SCRIPT
//Below lines are blocking (synchronous) code.
var x = 3;
var y = 4;

//The event handler is an example of non-blocking code (asynchronous code) because it is only executed when the button is clicked.
document.getElementById("testBtn").addEventListener("click", () => {
  console.log("Clicked");
});

let sum = x + y;
console.log("Sum");
console.log(sum);