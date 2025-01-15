// Blocking Code

/*
  Explanation: What this means is that the codes will be executed 
  one after the order (sequentially) starting from the frist line of code which means that 
  the first code (console.log()) will have to run first before the next code will execute continue until the last code.
*/

console.log("This code will run 1");
console.log("This code will run 2");
console.log("This code will run 3");
console.log("This code will run 4");
console.log("This code will run 5");
console.log("This code will run 6");
console.log("This code will run 7");
console.log("This code will run 8");
console.log("This code will run 9");
console.log("This code will run 10");
console.log("This code will run 11");
console.log("This code will run 12");


// Non-Blocking Asynchronous Code

/*
  Explanation: A non-blocking code means that it does not depend on another line of code to execute
  before it can run; that is, it will only be excuted when called on but in this case when the time set is out. 
  For example, this non-blocking setTimeout function code doesn't need to wait for the codes above (blocking) 
  to run before it can execute, it will execute once the time set is up, meaning it will display the span text
  on the webpage after two seconds while the codes above and belwo are still running.
*/

var spanValue = document.getElementById("non-blocking");
setTimeout(() => {
  spanValue.innerHTML = "This is a Non-blocking Code"
}, 2000);



// Blocking Code continued

/*
  This will continue from the blocking code above while skipping the setTimeout non-blocking code
  because that will execute after 2 seconds and it not a blocking code.
*/

console.log("This code will run 13");
console.log("This code will run 14");
console.log("This code will run 15");
console.log("This code will run 16");
console.log("This code will run 17");
console.log("This code will run 18");
console.log("This code will run 19");
console.log("This code will run 20");