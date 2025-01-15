//MODULE EXAMPLE
//The logger is for logging messages to the console.
var privateMsg = "My private message";
var x = "Random string";
export default x; //only one default export allowed in a module 

export function getMessage() {
  console.log(privateMsg);
}
export function setMessage(newMsg) {
  privateMsg = newMsg;
}