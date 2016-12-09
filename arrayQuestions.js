// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than five from the array.
// You shouldn't use the .filter method here; try to write the algorithm from scratch.

function filterArray(array, threshold) {
  let arr = [];
  array.forEach((element) => {
    if(element < threshold) return;
    return arr.push(element);
  })
 return arr;
}

let array = [1,2,3,4,5,6,7,8,9,10];


// Imagine you have two arrays which have already been sorted. Write an algorithm to merge the two arrays into a single array, which should also be sorted. For example, if your input arrays were [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10], your output array should be [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11].

let arrayA = [1, 3, 6, 8, 11];
let arrayB = [2, 3, 5, 8, 9, 10];

function mergeSortedArrays(arrayA, arrayB) {
  let loopLength = arrayA.length + arrayB.length;
  let arr = [], nA = 0, nB = 0;
  for(let i = 0; i < loopLength; i++) {
    if(arrayA[nA] <= arrayB[nB] || nB === arrayB.length) arr.push(arrayA[nA++]);
    else arr.push(arrayB[nB++]);
  }
  return arr;
}


// Given an array of numbers, write an algorithm to find out the products of every number, except the one at that index. For example, if the input was [1, 3, 9, 4], the output should be [108, 36, 12, 27] (i.e. [3*9*4, 1*9*4, 1*3*4, 1*3*9]).

let array = [1, 3, 9, 4];

function multiplyExceptIndex(array) {
  return array.map((element, index, array) => {
    let accumulater = 1;
    array.slice(0,index)
                .concat(array.slice(index + 1, array.length))
                .forEach((elem) => {
                  accumulater *= elem;
                });
    return accumulater;
  })
}

function fasterMultiplyExceptIndex(array) {
  let accumulater = 1;
  array.forEach((elem) => {
    return (accumulater *= elem);
  });
  return array.map((element) => accumulater / element);
}

function fasterMultiplyExceptIndex(array) {
  let quotient = array.reduce((acc, elem) => {
    return acc *= elem;
  });
  return array.map((element) => quotient / element);
}


function multiplyExceptIndex(array) {
  return array.map((element, index, array) =>
    array.slice(0,index)
         .concat(array.slice(index + 1, array.length))
         .reduce((a, b) => a * b);
  )
}

const multiplyExceptIndex = array => array.map((elem, i) =>
    array.reduce((a, b, j) => j == i ? a : a * b, 1)
  );










