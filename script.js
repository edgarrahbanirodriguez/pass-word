// Assignment code here
var symbol = "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJOLMNOPQRSTUVWXYZ"
var number = "0123456789"
var collector = ""
var truepassword = ""
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  console.log ("working")
  var promtUser =parseInt( prompt ("choose a length of at least 8 characters and no more than 128 characters"));
  if(promtUser >= 8 && promtUser <=128 ) {
    var lowerConfirm = confirm  ("Would you like lowercase characters")
    var upperConfirm = confirm  ("Would you like uppercase characters")
    var numberConfirm = confirm  ("Would you like numerical characters")
    var symbolConfirm = confirm  ("Would you like special characters")

    if(lowerConfirm){
      collector += lower;
    }

    if(upperConfirm){
      collector += upper;
    }
    if(numberConfirm){
      collector += number;
    }

    if(symbolConfirm){
      collector += symbol;
    }
    console.log (collector)

    for(var i = 0; i < promtUser; i ++){
      
      var data = Math.floor(Math.random()* collector.length);
      console.log (data)
      truepassword += collector[data]
      console.log (truepassword)
    }
    return truepassword
  } else {
    alert("Please make sure your characters are between 8 and 128")
    writePassword() 
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
