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

}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

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
