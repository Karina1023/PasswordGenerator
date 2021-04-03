var generateBtn = document.querySelector("#generate"); 
//variables identified
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "~!@#$%^&*()_-=;:?<>[]\.,|{}";
var selectionString = "";
//Step 1: look up how to generate a random character password
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
function generatePassword() {  


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
generateBtn.addEventListener("click", writePassword); 
//when generate button is clicked then call writepassword function