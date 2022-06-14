/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base/degenerate case: gotta return 1 when the list is empty
  //if you returned 0 anything you multiplied with it would stay 0
  //our stopping condition to prevent an infinite loop
  if(nums.length === 0) return 1;

  //take the first number of the arr
  //and multiply it by the outcome of product()
  //on nums one less element
  return nums[0] * product(nums.slice(1));
}

/** product([1, 2, 3])
 *                call stack diagram 
 * 
 *            1 (base case)           1
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *        3 * product([])          3 * 1 = 3
 *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *    2 * product([3])                2 * 3 = 6
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * 1 * product([2, 3])                  1 * 6 = 6
 */


/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length === 0) return 0;

  //look at one word's length 
  //"thisLength" is more descriptive than "word"
  const thisLength = words[0].length;
  //and compare to the next, returning the larger word length--recurse
  return Math.max(thisLength, longest(words.slice(1)));

}

/** longest(["a", "ab", "abc"])
 *                           call stack diagram 
 * 
 *            0 (base case)                             0
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *        Math.max("abc", longest([]))            Math.max(0, 3) = 3
 *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *    Math.max(2, longest(["abc"]))                    Math.max(2, 3) = 3
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * Math.max(1, longest(["ab", "abc"]))                      Math.max(1, 3) = 3
 */


/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //if there are no letters left, return an empty str
  if(str === "") return "";

  //look at the first letter of the str, concat with the 3rd letter 
  //fun fact: slicing an idx of an empty str returns an empty str, not an error
  return str[0] + everyOther(str.slice(2));
}

/** everyOther("dog")
 *                        call stack diagram 
 * 
 *            "" (base case)                    ""
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *       "g" + everyOther("")                       "g"
 *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *  "d" + everyOther("g")                                 "dg"
 */


/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  //base cases are if the arr are empty and if we find the val
  if(arr.length === 0) return false;
  if(arr[0] === val) return true;

  //look at the first val in the arr
  //compare to find(idx1 onwards)
  return find(arr.slice(1), val);

}

/** find([1, 2, 3], 3)
 *                        call stack diagram 
 * 
 *      never gets to find([], 3 because we've hit our base case return 
 *                       which stops the recursion)
 * 
 *            find([3], 3) (base case)               true            
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *       find([2, 3], 3)                                true
 *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *  find([1, 2, 3], 3)                                      true
 * 
 * when we hit that base case at the top of our stack, it returns true
 * so we go down a level to our find([2,3], 3) call, which was waiting
 * for our top lvl recursive call, and is handed that true value   
 * etc.      
 * 
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * 
 * find([1, 2, 3], 5)
 *                        call stack diagram 
 * 
 *                   never hits our second base case
 * 
 *                find([], 5) (base case)          false            
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *            find([3], 5)                            false            
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *       find([2, 3], 5)                                  false
 *     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *   find([1, 2, 3], 5)                                      false
 *            
 */


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //base case: if there's less than 2 letters left, we got it! return true
    //ex: "dad" => "a" it's palindrome!
    //ex: "foof" => "oo" => "" it's a palindrome!
  if(str.length < 2) return true;

  //check if the 1st letter and last are the same, if not, return false
  if(str[0] !== str[str.length - 1]) return false;

  //if we get down here, that means that the 1st and last letters were the same
  //but we still have additional characters to check, 
  //so we need to cut off the current 1st and last letters and check the rest
  return isPalindrome(str.slice(1, str.length-1))
}

/**
 * isPalindrome("racecar")
 *                        call stack diagram 
 * 
 *                   never hits our second base case
 * 
 *                isPalindrome("e") (base case)         true            
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *            isPalindrome("cec")                          true            
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *       isPalindrome("aceca")                                 true
 *     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *   isPalindrome("racecar")                                      true
 *            
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * 
 * isPalindrome("abcdecba")
 *                            call stack diagram 
 * 
 *                      never hits our first base case
 * 
 *                isPalindrome("de") (base case)        false            
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *            isPalindrome("cdec")                          false            
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *       isPalindrome("bcdecb")                                 false
 *     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *   isPalindrome("abcdecba")                                      false
 * 
 */


/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

// you might find this problem easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
