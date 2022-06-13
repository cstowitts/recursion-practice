/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base/degenerate case: product of an empty list is 1 bc reasons
  //our stopping condition to prevent an infinite loop
  if(nums.length === 0) return 1;
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

}

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
