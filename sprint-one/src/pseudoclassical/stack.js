var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeOfStack = 0;
  this.poppedValue = 0;
};

Stack.prototype.push = function(value) {
  this.sizeOfStack++;

  var newKey = this.sizeOfStack

  this[newKey] = value; 
};

Stack.prototype.pop = function() {

  var deletedValue = this.sizeOfStack
  this.sizeOfStack--

  if (this.sizeOfStack < 0) {
    this.sizeOfStack = 0
  }
 return this[deletedValue]

};


Stack.prototype.size = function() {
  return this.sizeOfStack;
};





