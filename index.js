function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++){
    const endIndex = word.length - 1 -startIndex;
    if (word[startIndex] !== word[endIndex]) {
    return false;
    }
  }
  return true;
}
  // // Write your algorithm here
  // will need to make isPalindrome() return true or false
  // if inputed string is the same forward and backward
  // then return true if not return false 

/* 
  Add your pseudocode here
  iterate from beginning of the string to the middle
  compare the letter we are iterating over to the corresponding letter at the end of the string
  if the letters don't match return false
  if we get to the middle and they do return true 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
