// Big O Exercises

// What's the Complexity

// Exercise 1
function evenOrOdd(number) {
  let count = 0; //O(1)
  return {value: (number % 2 == 0 ? "even": "odd"), count: (count + 1)}; //O(1)
}
// average and worst runtime always equals 1, or O(1)

// Exercise 2
function doubleArray(array) {
  let count = 0; // O(1)
  for(i in array) { //O(n)
    count++; //O(1)
    if(array[i].length > 1) { //O(1)
      doubleArray(array[i]); //O(?)
    } else {
      array[i] = array[i]*2; //O(1)
    }
  }
  return {array: array, count: count}; //O(1)

// average and worst runtime always equals array.length, or O(n)


// Exercise 3
function findElement(element, array) {
  let count = 0, x = 0; //O(1)
  while(x != element) { //O(inf)
    let index = Math.floor(Math.random() * array.length); //O(1) ?
    x = array[index]; //O(1)
    count++; //O(1)
  }
  return count; //O(1)
}

function averageCount(element, array, iterations) {
  let j = 0;
  let results = [];
  while(j < iterations) {
    results.push(findElement(element, array));
    j++;
  }
  let average = (results.reduce(function(a, b) {return a + b;}, 0))/results.length
  let max = Math.max.apply(null, results);
  let min = Math.min.apply(null, results);
  return {average: average, max: max, min: min};
}
// average runtime is about array.length iterations, the max is usually over 10 times array.length and the min is 1. Average runtime is about O(n) (or O(sqrt(n)). Worst runtime is about O(inf).


// Exercise 3 the intended way
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
// O(1) since there are no loops


// Exercise 4
var people = ["JP", "Dennell", "Benjamin", "Paul", "Donna", "Emily"];

function createPairs (arr){
  let pairs = [], count = 0; //O(1)
  while(arr.length > 2) { //O(n/2))
    let index = Math.ceil(Math.random() * (arr.length-1)) //O(1)
    pairs.push(arr[0].concat(", ", arr[index])); //O(1)
    arr = arr.filter((value) => {count ++; return value != arr[0] && value != arr[index]}); //O(n/2)
    // arr.splice()
    count++; //O(1)
  }
  pairs.push(arr[0].concat(", ", arr[1])); //O(1)
  return {people: pairs, count: count}; //O(1)
}

createPairs(people);

// runtime must include while and filter runtimes, each of which are O(n/2), which is equivalent to O(n). Together, this gives O(n^2).


// Exercise 5
function isPrime(value) {
  let count = 0, sqrt = Math.sqrt(value); //O(1)
  if(value <= 1) return {prime: false, count: count}; // O(1)
  for(var i = 2; i <= sqrt; i++) { //O(n-2)
    count++; //O(1)
    if(value % i === 0) { //O(1)
        return {prime: false, count: count}; //O(1)
    }
  }
  return {prime: true, count: count} //O(1)
}

// prime numbers have O(n), half of nonprime have O(1), half have O(n) so overall runtime would be O(n). Since the square root of a value can be used to determine if it is prime, we can test for divisibility up to the square root only. This makes O(sqrt(n)).

// Exercise 6
function matchArrayElements(array1, array2) {
  let count = 0, matches = []; //O(1)
  for(let i in array1) { //O(n)
    count++; //O(1)
    if(array1[i] in array2) { //O(n)
      count++; //O(1)
      matches.push(array1[i]); //O(1)
    }
  }
  return {matches: matches, count: count}; //O(1)
}

// average and worst runtime complexity is O(n^2), since there is a nested loop.

// alternative
function matchArrayElements2(array1, array2) {
  let fullArray = array1.concat(array2);

  const count = fullArray.reduce((a,b) => Object.assign(a, {[b]: (a[b] || 0) + 1}), {});
  return Object.keys(count).filter((a) => count[a] > 1);

  // let map = {}
  // for (let obj of fullArray) if (map[obj]) return true; else map[obj] = 1;
  // return false;
}


function find_duplicate_files(filenames) {
let map = {};
for (let fn of filenames) {
  let hash = calculate_file_hash(fn); // implemented elsewhere
  if (map[hash]) console.log( map[hash], fn);
  else map[hash] = fn;
}}


// Exercise 7
function minArrayElement(array) {
  let count = 0, min = array[0]; //O(1)
  if(!array.length) return null;
  for(let i = 0; i < array.length; i++) { //O(n)
    count++; //O(1)
    if(array[i] < min) min = array[i]; //O(1)
  }
  return {min: min, count: count}; // O(1)
  //or return Math.min.apply(null, array);
}

// average and worst runtime are equivalent, they are equal to O(n), since there is one loop through the array.



