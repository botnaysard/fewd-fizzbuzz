$(document).ready(function() {
  validateInput();
  fizzBuzz();
}); 

function validateInput() {
    do {
      userInput = prompt("Please enter an integer to FizzBuzz:"); //do not use var, as value needs to be passed from within the fucntion to global
    }
    while ((isNaN(userInput)) || (userInput % 1 != 0)); //pretty good, but doesn't catch negative numbers (fix that)
    console.log("User is the integer: " + userInput);
    return userInput;
} 

function fizzBuzz(){
      for (var fizzBuzzCounter = 1; fizzBuzzCounter <= userInput; fizzBuzzCounter++) {
        if (fizzBuzzCounter % 3 === 0  && fizzBuzzCounter % 5 === 0) { 
          $('.outputbox').append("<p>FizzBuzz</p>");
        } 
        else if (fizzBuzzCounter % 5 === 0) {
          $('.outputbox').append("<p>Buzz</p>");
        }
        else if (fizzBuzzCounter % 3 === 0) {
          $('.outputbox').append("Fizz");
        }
        else {
         $('.outputbox').append("<p>" + fizzBuzzCounter + "</p>");  
        }      
    } 
}   
  

 
