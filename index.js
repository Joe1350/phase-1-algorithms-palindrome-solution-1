  // simplelist
function isPalindrome(word) {
  return word === word.split('').reverse().join('')
}

// but how readable is it?
  // I think it's readable, but maybe that's because I wrote it.
    // split the word into letters, reverse the array of letters, join the reversed letters back to a string.
    // check if the new reversed string strictly equals the original word
    // will return true or false



/* 
  Add your pseudocode here
*/

// reverse the string
// check that original === reversed
  // return true
// else
  // return false




/*
  Add written explanation of your solution here
*/

// make a function that returns true if a word is a palindrome and false if not.
// if the word is the same as the word in reverse I should return true




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



  // original
// function isPalindrome(word) {
//   // Write your algorithm here
//   const reversedWord = reverse(word)
//   if (reversedWord === word) {
//     return true
//   } else {
//     return false
//   }
// }

// function reverse(word) {
//   let letters = Array.from(word) // word.split('')
//   const reversedLetters = letters.reverse()
//   const reversedLettersJoined = reversedLetters.join('')
//   return reversedLettersJoined
// }



  // simplified
// function isPalindrome(word) {
//   // Write your algorithm here
//   const reversedWord = reverse(word)
//   return reversedWord === word
// }
  
// function reverse(word) {
//   return word.split('').reverse().join('')
// }



  // further simplified
// function isPalindrome(word) {
//   // Write your algorithm here
//   const reversedWord = word.split('').reverse().join('')
//   return reversedWord === word
// }