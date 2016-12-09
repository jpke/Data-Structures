// Recursion
// Exercise 1
function evenOrOdd(integer) {
  if(integer < 0) {
    integer = Math.abs(integer);
  }
  if(integer === 1) {
    return "odd"
  }
  if(integer === 0) {
    return "even";
  } 
  return evenOrOdd(integer - 2);
}


// Exercise 2
function doubleArray(array) {
  if(typeof(array) == "number") {
    return array * 2;
  }
  for(let i in array) {
    array[i] = doubleArray(array[i]);
  }
  return array;
}

function doubleArr(arr) {
  if (arr.length === 0) {
    return arr;
  }

  let n = arr[0] * 2;
  return [n].concat(doubleArr(arr.slice(1)));
}


// Exercise 3
function reverseString(string) {
  if(string.length === 0) {
    return "";
  }
  return string[string.length - 1] + reverseString(string.slice(0, string.length - 1))
}

// function reverseString(string) {
//   if(string.length === 0) {
//     return "";
//   }
//   for(let i = 0; i <= string.length; i++) {
//     string[i] = string[string.length - 1 - i];
//     console.log(string[i]);
//     console.log(string[string.length - i]);
//   }
//   return string;
// }

// 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153
// Exercise 4
function nthTriangle(n) {
  if (n <= 0) {
    return 0
  }
  console.log(n);
  return nthTriangle(n - 1) + n;
}


// Exercise 5
function splitString(string, sep) {
  if(string.length === 0) {
    return [];
  }
  let results = [];
  for(let i = 0; i < string.length; i++) {
    if(string[i] === sep) {
      results.push(string.slice(0,i));
      return results.concat(splitString(string.slice(i+1, string.length), sep));
    }
  }
  if(results.length === 0) return [string];
}

// Write a function that takes in a multi-dimensional array and returns the sum
// of all possible arrays within the array
// [1,2,3,[4,5,[6,7,[8,9]]]] = 

function sumArrays(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += sumArrays(arr[i])
    } else {
      sum += arr[i]
    }
  }
  return sum;
}









