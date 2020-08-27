// Constants
const generateBtn = document.querySelector("#generate");

// Functions
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let special = ["!", "@", "#", "$", "%", "^", "&", "*"];

/**
 * writes a generated password to the #password
 */


/**
 * generate a password based on certain criteria
 */
function generatePassword() {
    let passLength = parseInt(prompt("How long would you like your password"));
    if (passLength < 8 || passLength > 128) {
        alert("choose a length of at least 8 characters and no more than 128 characters");
        return;
    }
    let lower = confirm("Would you like lowercase letters?");
    let upper = confirm("Would you like uppercase letters?");
    let specialchar = confirm("Would you like any special characters?");
    let numbers = confirm("would you like numbers?");

    if (lower === false && upper === false && specialchar === false && numbers === false) {
        alert("Please choose at least one character set");
        return;
    }

    let passwordOptions = [];
    if (lower === true) {
        passwordOptions = passwordOptions.concat(lowerCase)
    }
    if (upper === true) {
        passwordOptions = passwordOptions.concat(upperCase)
    }
    if (specialchar === true) {
        passwordOptions = passwordOptions.concat(special)
    }
    if (numbers === true) {
        passwordOptions = passwordOptions.concat(num)
    }
    let pass = [];


    for (let i = 0; i < passLength; i++) {
        let result = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
        pass.push(result);
    }


    // Password is currently blank! We need to make a better one
    return pass.join("");
}

// Main Process
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
