var LinkedList = function() {
    this.length = 0;
    this.head = null;
};

LinkedList.prototype.insert = function(index, value) {

  if (index < 0 || index > this.length) {
    throw new Error ("wrong index");
  }

  var newNode = {
    value: value
  };

  if (index == 0) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    var prevNode = this.findDaNode(index-1);
    newNode.next = prevNode.next
    prevNode.next = newNode;
  }

  this.length += 1;
};

LinkedList.prototype.findDaNode = function(index) {
  var priorNode = this.head;
  for (var i = 0; i < index; i++) {
    priorNode = priorNode.next;
  }
  return priorNode;
};

LinkedList.prototype.prettyPrint = function() {
  var node = this.head;
  for (var i = 0; i < this.length; i++) {
    console.log("node index value:" + i + ": ");
    console.log(node);
    node = node.next;
  }
};

LinkedList.prototype.removeDaNode = function(index) {
  if (index < 0 || index >= this.length) {
    throw new Error ("don't be a dummy, yo!");
  }

  if (index == 0) {
    this.head = this.head.next;
  } else {
    var nodeBeforeNodeToRemove = this.findDaNode(index - 1);
    nodeBeforeNodeToRemove.next = nodeBeforeNodeToRemove.next.next;
  }

  this.length -= 1;
};

LinkedList.prototype.get = function(index) {
  var node = this.head;
  for (var i = 0; i < index; i++) {
    node = node.next;
  }
  return node;
};

LinkedList.prototype.findDaMiddle = function() {
  var tortoise = this.head;
  var hare = this.head;
  var counter = 0;
  while (hare.next != null) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    console.log("hare is now: ", hare);
    console.log("tortoise is now: ", tortoise);
    counter += 1;
  }
  return tortoise;
};

LinkedList.prototype.find3rdFromEnd = function() {
  var currentNode = this.head;
  var counter = 0;
  while (currentNode.next != null) {
    currentNode = currentNode.next
    counter += 1;
  }
  return this.findDaNode(counter-2);
};

LinkedList.prototype.reverseList = function() {
  var currentNode = this.head;
  var counter = 0;
  while (currentNode.next != null) {
    currentNode = currentNode.next;
    counter += 1;
  }
  while (counter >= 0) {
    this.findDaNode(counter).next = this.findDaNode(counter - 1);
    counter -= 1;
  }
  this.findDaNode(counter).next = null;
  this.head = currentNode;
  console.log(" * * * * *");
  console.log("and the end, this dot head is: ", this.head);
};

LinkedList.prototype.loopFinder = function() {
  var tortoise = this.head;
  var hare = this.head;
  var loopLengthCounter = 1;
  // check if there is a loop
  while (hare.next != null) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (tortoise == hare) {
      hare = hare.next.next;
      tortoise = tortoise.next;
      // count the length of the loop
      while (tortoise != hare) {
        loopLengthCounter += 1;
        tortoise = tortoise.next;
        hare = hare.next.next;
      }
      var brotherTortoise = this.head;
      while (brotherTortoise != tortoise) {
        tortoise = tortoise.next;
        brotherTortoise = brotherTortoise.next;
      }
      return ([loopLengthCounter, brotherTortoise]);
    }
  }
};


var test = new LinkedList();
test.insert(0, "cat");
test.insert(1, "dog");
test.insert(2, "bird");
test.insert(3, "tiger");
test.insert(4, "bear");
test.insert(5, "tree");
test.insert(6, "parrot");
test.insert(7, "coffee");
test.insert(8, "tea");
test.insert(9, "table");
test.insert(10, "chair");
test.insert(11, "sofa");
test.insert(12, "castle");
test.insert(10, "zeus");
// created our artificial loop for testing
test.findDaNode(13).next = test.findDaNode(3);

test.prettyPrint();
test.loopFinder();

//console.log("get test");
//console.log(test.get(2));
// test.removeDaNode(1);
// console.log("print out after removal");
// test.prettyPrint();
// console.log(" ");
// console.log(test.findDaMiddle());
//console.log(test.find3rdFromEnd());
//test.reverseList();
//test.prettyPrint();