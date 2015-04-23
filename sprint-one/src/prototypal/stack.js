var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = Object.create(stackMethods); 
  newStack.sizeOfStack = 0;
  newStack.poppedValue = 0;


  return newStack
};

var stackMethods = {};


stackMethods.push = function(value) {
  this.sizeOfStack++;

  var newKey = this.sizeOfStack

  this[newKey] = value; 
};

stackMethods.pop = function() {

  var deletedValue = this.sizeOfStack
  this.sizeOfStack--

  if (this.sizeOfStack < 0) {
    this.sizeOfStack = 0
  }
 return this[deletedValue]

};


stackMethods.size = function() {
  return this.sizeOfStack;
};
