function generatePassword(
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) {
  let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  let numberChars = "0123456789";
  let symbolChars = "!@#$%^&*()_+";

  let allowedChars = "";
  let password = "";

  allowedChars += includeUppercase ? upperCaseChars : "";
  allowedChars += includeLowercase ? lowerCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (passwordLength < 1) {
    return "Password length should be at least 1";
  } else if (allowedChars === "") {
    return "At least one character type should be selected";
  } else {
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
    return password;
  }
}

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${password}`);
