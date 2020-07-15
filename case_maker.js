/*
REQUIREMENTS:
Receive a normal string of words separated with spaces as the input. 
Our job is to convert these strings into camel cased strings.

TEST INPUTS:
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

EXPECTED OUTPUTS:
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/

const camelCase = function(input) {
  let sLength;
  let camelString = '';
  let errMsg = 'WHOA! This function only accepts strings!';

  if (typeof input === 'string'){
    let char = '';
    // trim spaces
    input.trim();
    sLength = input.length;
    for (let i = 0; i < sLength; i++) {
      if (input.charAt(i) === " ") {
        char = input.charAt(i+1); // get the letter after the space
        char = char.toUpperCase();
        camelString = camelString + char;
        i = i + 1; // to account for jumping ahead a space
      } else {
        camelString = camelString + input.charAt(i)
      }
    }
  } else {
    camelString = errMsg;
  }
  return camelString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));