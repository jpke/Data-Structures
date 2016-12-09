let array = [[1,0,1], [5,5,5], [6,1,0]];


function setToZero(array) {
  let zeros = [];
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(array[i][j] == 0){
        zeros.push([i, j])
      }
    }
  }

  for(let x = 0; x < zeros.length; x++) {
    let index = zeros[x][0];
    for(let y = 0; y < array[index].length; y ++) {
      array[index][y] = 0;
    }
    index = zeros[x][1];
    for(let z = 0; z < array.length; z++) {
      if(array[z].length > index) {
        array[z][index] = 0; 
      }
    }
  }
  return array;
}

var array = [1,2,3,4,5,6,7,8,9,10]
function findPairsThatSum(array, value) {
  let pairs = [];
  for(let i = 0; i < array.length; i ++){
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === value) {
        pairs.push([array[i], array[j]]);
      }
    }
  }
  return pairs;
}

var summingPairs = function(arr, value) {
    var pairs = [];
    var map = {};
    for (var i=0; i<arr.length; i++) {
        var item = arr[i];
        if ((item) in map) {
            pairs.push([item, map[item]]);
        }
        else {
            map[value - item] = item;
        }
    }
    return pairs;
};


function sumLinkedLists(lL1, lL2) {
  let tens1 = lL1.get(0);
  let ones1 = lL1.get(1);
  let value1 = parseInt(tens1.toString().concat(ones1));

  let tens2 = lL2.get(0);
  let ones2 = lL2.get(1);
  let value2 = parseInt(tens2.toString().concat(ones2));
  console.log(value1, value2);

  let sum = value1 + value2;

  sum = sum.toString()

  let sumLL = new LinkedList();
  for(s in sum) {
    sumLL.insert(s, sum[s]);
  }
  return sumLL;
}

var lL1 = new LinkedList();
lL1.insert(0,5);
lL1.insert(1,5);

var lL2 = new LinkedList();
lL2.insert(0,6);
lL2.insert(1,5);




// function isTreeBalanced(tree) {
//   let count = count || 0;
//   console.log(count);
//   if(tree.left) isTreeBalanced(tree.left, count++);
//   if(tree.right) isTreeBalanced(tree.right, count++);
//   return count;
// }

var checkBalanced = function(tree) {
    if (!tree.left) {
      return !(tree.right && (tree.right.left || tree.right.right));
    } 
    if (!tree.right) {
      return !(tree.left && (tree.left.left || tree.left.right));
    }
    return checkBalanced(tree.left) && checkBalanced(tree.right);
  }


function rectangularIntersection(rect1, rect2) {
  intersectingWidth = (rect1.left + rect1.width) - rect2.left;
  intersectingHeight = (rect1.bottom + rect1.height) - rect2.bottom;
  return {
    left: rect2.left,
    bottom: rect2.bottom,
    width: intersectingWidth,
    height: intersectingHeight
  }  
}

rect1 = {
  left: 1,
  bottom: 5, 
  width: 10,
  height: 4
}
rect2 = {
  left: 2,
  bottom: 6,
  width: 20,
  height: 8
}

rectangularIntersection(rect1, rect2)


var findRangeOverlap(point1, length1, point2, length2) {
    var highestStartPoint = Math.max(point1, point2);
    var lowestEndPoint = Math.min(point1 + length1, point2 + length2);

    if (highestStartPoint >= lowestEndPoint) {
        return {
            startPoint: null,
            overlapLength: null
        };
    }

    var overlapLength = lowestEndPoint - highestStartPoint;

    return {
        startPoint: highestStartPoint,
        overlapLength: overlapLength
    };
}

var intersectionOfRectangles = (rect1, rect2) {
    var xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
    var yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

    if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
        return {
            leftX: null,
            bottomY: null,
            width: null,
            height: null,
        };
    }

    return {
        leftX: xOverlap.startPoint,
        bottomY: yOverlap.startPoint,
        width: xOverlap.overlapLength,
        height: yOverlap.overlapLength,
    };
}



// var isRotated = function(string1, string2) {
//    var check = "";
//    var index = string2.indexOf(string1[0]);
//    for (i = index; i < string2.length; i++) {
//     check += string2[i];
//    }
//    for (i = 0; i < index; i++) {
//     check += string2[i];
//    }
//    if (check === string1) {
//     return true;
//    } else{
//     return false
//    }
// }

function isRotated(string, rotatedString){
  let duplicateRotatedString = rotatedString.concat(rotatedString);
  return duplicateRotatedString.indexOf(string) !== -1;
}

var isRotation = function(a, b) {
    return (b + b).indexOf(a) != -1;
};
