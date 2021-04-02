// Assignment Code
//now generate btn is now a reference to the generate password button
var generateBtn = document.querySelector("#generate"); 
//lowercase, uppercase,numeric, and special characters
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "~!@#$%^&*()_-=;:?<>[]\.,|{}";
var selectionString = "";
//Step 1: look up how to generate a random character password
//function generatePassword(){
  //var length = 8;
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  
  
  
// Write password to the #password input
function generatePassword() {  

//

  var selectionString = "";
  var password = "";
  
  var length = parseInt(prompt("Enter length of password"));
    if (length <8){
      alert("Password length should be greater than 8 characters; try again");
      return;
    }
    if (length>128){
      alert("Password length should be less than 128 characters;try again");
      return;
    }
    var lowCharCon = confirm("Do you want to include lowercase letters?");
    var upCharCon = confirm("Do you want to include uppercase characters?");
    var numberCon = confirm("Do you want to include numbers?");
    var specialcon = confirm("Do you want to include special characters?");
  
if(lowCharCon || upCharCon || numberCon || specialcon){


  if (lowCharCon){
  selectionString += lowChar
  console.log(selectionString);
}
if(upCharCon){
  selectionString += upChar
  console.log(selectionString);
}
if(numberCon){
  selectionString += number
  console.log(selectionString);
}
if(specialcon){
  selectionString += special
  console.log(selectionString);
}

//generates the random password 
var charactersLength = selectionString.length;
   for ( var i = 0; i < length; i++ ) {
      password += selectionString.charAt(Math.floor(Math.random() * charactersLength));
   }
   return password;

  }else{
    alert("You must select at least one character type.");
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when generate button is clicked then call writepassword function


  //your task is to generate a string with the required criteria
  //return "We are doing a pseudocode session for the third homework assignment"


//Hints
//google how to generate a random character
//function getRandom(){}

//console.log(Math.floor (Math.random()*3) +
// Step 2: Say we now have a LENGTH variable, then run a for loop and it should iterate LENGTH number of times and run the generate character function in it,
  //Step 3: return the resulting string

// use a for loop to generate N number of random characters.
//look at html to get an idea of whats going on and what its talking about but only manipulate and change script.js
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
