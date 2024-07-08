// RANDOM PASSWORD GENERATOR

const textBox = document.getElementById("textBox");
const result = document.getElementById("result");

function generatePassword() {
    const passwordLength = Number(textBox.value);
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = lowercaseChars.toUpperCase();
    const numberChars = "0123456789";
    const symbolChars = "~!@#$%^&*()|`";

    let allowedChars = "";
    let password = "";

    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;
    
    if (passwordLength < 1) {
        result.textContent = "Password length must be at least 1";
        return;
    }

    if (allowedChars.length === 0) {
        result.textContent = "At least one character type needs to be selected";
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    result.textContent = password;
    // return password;
}

function copyToClipboard() {
    const password = result.textContent;
    if (!password || password === "Click above") {
        alert("No password generated to copy!");
        return;
    }
    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Password copied to clipboard!");
}

/** 
const password = generatePassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols);

*/

///console.log(`Generated password: ${password}`);
