var Queue = function(){

  var someInstance = {};

  // Use an object with numeric keys to store values

  var storage = {};

  // Implement the methods below
  //FIFO 

  var enqueueValue = 0;
  var dequeueValue = 0;
  var sizeOfQueue = 0;

  someInstance.enqueue = function(value){
    
    sizeOfQueue++;
    enqueueValue++;
      
    //var newKey = sizeOfQueue;

    Queue[enqueueValue] = value;  
  };

  someInstance.dequeue = function(){
    // Remove and return the string at the front of the queue
    
    // "delete" key:value, then return it

    //Size Changes when dequeue is run
    //dequeue+1
    //enqueue is unchanged
    //size + -1

    dequeueValue++;
    //var deletedValue = Queue[sizeOfQueue];

    var deletedValue = Queue[dequeueValue]

    //storage = deletedValue;

    delete Queue[dequeueValue];

    sizeOfQueue--; //decrement from Queue, not sizeOfQueue

    return deletedValue;

  };

  someInstance.size = function(){
    // counts amount of key value pairs within object
    // simple for loop

    counter = 0;

    for (var key in Queue) {
      
      counter++
    } 
    return counter  
    
  };

  return someInstance;
};
