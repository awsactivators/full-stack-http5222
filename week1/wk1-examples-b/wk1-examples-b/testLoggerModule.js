//import the functions (and/or properties) from loggerModule.js
import { getMessage, setMessage } from "./loggerModule.js";
//without curly braces, the import will import whatever default export from the module
import myRandomString from "./loggerModule.js";

getMessage();
console.log(myRandomString);