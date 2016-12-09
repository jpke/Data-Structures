// Imagine you have an array of numbers. Write an algorithm to remove
// all numbers less than five from the array.

// Option 1: Mutate the array
function remove_lt_5(arr) {
  for (var i = arr.length-1; i >= 0; --i) {
    if (arr[i] < 5) arr.remove(i);
  }
  return arr;
}

// Option 2: Return a new array
function remove_lt_5(arr) {
  var ret = [];
  for (var i = 0; i < arr.length; ++i) {
    if (!(arr[i] < 5)) ret.push(arr[i]);
  }
  return ret;
}

// Imagine you have two arrays which have already been sorted. Write an
// algorithm to merge the two arrays into a single array, which should
// also be sorted.
function merge_arrays(arr1, arr2) {
  var idx1 = 0, idx2 = 0;
  var ret = [];
  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] <= arr2[idx2])
      ret.push(arr1[idx1++]);
    else
      ret.push(arr2[idx2++]);
  }
  // One array is now empty. Join the rest of the other array on.
  if (idx2 < arr2.length) {
    idx1 = idx2;
    arr1 = arr2;
  }
  while (idx1 < arr1.length) ret.push(arr1[idx1++]);
  return ret;
}

// Given an array of numbers, write an algorithm to find out the products
// of every number, except the one at that index. For example, if the input
// was [1, 3, 9, 4], the output should be [108, 36, 12, 27] (i.e.
// [3*9*4, 1*9*4, 1*3*4, 1*3*9]).

// As accurate as possible, but O(N^2)
function products(arr) {
  var ret = [];
  for (var idx1 = 0; idx1 < arr.length; ++idx1) {
    var prod = 1;
    for (var idx2 = 0; idx2 < arr.length; ++idx2) {
      if (idx1 != idx2) prod *= arr[idx2];
    }
    ret.push(prod);
  }
  return ret;
}

// O(N) but risks inaccuracy due to overflow and precision loss
function products(arr) {
  var ret = [];
  var prod = 1;
  for (var idx2 = 0; idx2 < arr.length; ++idx2) {
    prod *= arr[idx2];
  }
  for (var idx1 = 0; idx1 < arr.length; ++idx1) {
    ret.push(prod / arr[idx1]);
  }
  return ret;
}

console.log(merge_arrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
console.log(products([1,3,9,4]));