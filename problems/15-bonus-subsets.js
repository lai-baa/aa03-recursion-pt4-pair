/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// const subsets = (arr) => {
//   // Your code here 
//   let subs = [];
//   if (arr.length === 0) return [[]];
//   if (arr.length === 1) return [[], [arr[0]]];
//   for (let i = arr.length - 1; i > arr.length - 3; i--){
//     subs.push(arr[i],)
//   }
//   // return subs;
// }

// solution
const subsets = (arr) => {
  if (!arr.length) return [[]];
  const last = arr[arr.length - 1];
  const subs = subsets(arr.slice(0, arr.length - 1));
  // console.log(subs);
  return subs.concat(subs.map((el) => {
    let newArr = el.slice(0)
    newArr.push(last);
    return newArr;
  }));
}

// console.log(subsets([])) // [[]]
// console.log(subsets([1])) // [[], [1]]
// console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
// debugger
// console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
