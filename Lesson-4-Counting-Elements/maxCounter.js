// You are given N counters, initially set to 0, and you have two possible operations on them:
//
// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:
//
// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:
//
//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:
//
//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)(1, 0,1,2,0)
//     (3, 2, 2, 3, 2)(1, 0,1,3,0)
//     (3, 2, 2, 4, 2)(1, 0,1,4,0)
// The goal is to calculate the value of every counter after all operations.
//
// Write a function:
//
// function solution(N, A);
// that, given an integer N and a non-empty zero-indexed array A consisting of M integers, returns a sequence of integers representing the values of the counters.
//
// The sequence should be returned as:
//
// a structure Results (in C), or
// a vector of integers (in C++), or
// a record Results (in Pascal), or
// an array of integers (in any other programming language).
// For example, given:
//
//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the function should return [3, 2, 2, 4, 2], as explained above.
//
// Assume that:
//
// N and M are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..N + 1].
// Complexity:
//
// expected worst-case time complexity is O(N+M);
// expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
// Elements of input arrays can be modified.

//Output - Array of counters
//Input - Array of length M and an integer (N) that represents the size of the output array
//O(N + M), O(N)
//N and M are between 1 and 100,000

//Examples
//keep track of the largest found counter
//iterate through the M array and do a count and update the largest counter
//at the end of the function, add the largest found counter to each element


//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the function should return [3, 2, 2, 4, 2], as explained above.

//create a results array consisting of all 0's

//variable largest to keep track of largest counter
//loop through the M array using i incrementer
  //if greater than N
    //set all results to largest
  //else
    //increment current i
//return result
function solution(n, a) {
  //create a results array consisting of all 0's
  let results = new Array(n).fill(0);
  //variable largest to keep track of largest counter
  let largest = 0;
  //loop through the M array using i incrementer
  for(let i = 0; i < a.length; i++){
    //if greater than N
    if(a[i] > n){
      //set all results to largest
      results.fill(largest);
    }else{
      //increment current i
      results[a[i] - 1]++;
      largest = results[a[i] - 1] > largest ? results[a[i] - 1] : largest;
    }
  }
  //return result
  return results;
}


function solutionEfficient(n, a) {
  //create a results array consisting of all 0's
  let results = new Array(n).fill(0);
  let largest = 0;
  let lastLargest = 0;
  for(let i = 0; i < a.length; i++){
    let resultsIndex = a[i] - 1;
    if(a[i] > n){
      lastLargest = largest;
    }else{
      results[resultsIndex] = Math.max(results[resultsIndex], lastLargest);
      results[resultsIndex]++;
      largest = Math.max(results[resultsIndex], largest);
    }
  }

  return results.map(item => Math.max(item, lastLargest));
}
