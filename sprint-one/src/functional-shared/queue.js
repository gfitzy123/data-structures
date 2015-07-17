var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var newQueue = {};
  newQueue.sizeOfQueue = 0;
  newQueue.dequeueValue = 0;
  newQueue.enqueueValue = 0;
  

  extend(newQueue, queueMethods);
  return newQueue;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};


queueMethods.enqueue = function(value) {

  this.sizeOfQueue++;
  this.enqueueValue++;
  this[this.enqueueValue] = value;  

};

queueMethods.dequeue = function() {

  this.dequeueValue++;
  var deletedValue = this[this.dequeueValue]
  delete this[this.dequeueValue];
  this.sizeOfQueue--; 

  if (this.sizeOfQueue < 0) {
    this.sizeOfQueue = 0
  }

  return deletedValue;
};


queueMethods.size = function() {
  return this.sizeOfQueue;
  
};

