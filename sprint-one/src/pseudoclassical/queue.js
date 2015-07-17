var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.sizeOfQueue = 0;
  this.dequeueValue = 0;
  this.enqueueValue = 0;

};

Queue.prototype.enqueue = function(value) {

  this.sizeOfQueue++;
  this.enqueueValue++;
  this[this.enqueueValue] = value;  

};

Queue.prototype.dequeue = function() {

  this.dequeueValue++;
  var deletedValue = this[this.dequeueValue]
  delete this[this.dequeueValue];
  this.sizeOfQueue--; 

  if (this.sizeOfQueue < 0) {
    this.sizeOfQueue = 0
  }

  return deletedValue;
};

Queue.prototype.size = function() {
  return this.sizeOfQueue;
  
};


