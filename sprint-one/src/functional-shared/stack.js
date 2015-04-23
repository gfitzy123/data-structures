var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = {};
  newStack.sizeOfStack = 0;
  newStack.poppedValue = 0;
  extend(newStack, stackMethods);
  return newStack;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

// We need to use the keyword this in our methods

stackMethods.push = function(value) {
  this.sizeOfStack++;

  var newKey = this.sizeOfStack

  //How do we obtain the value of sizeOfStack and pass it as a new property?

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
