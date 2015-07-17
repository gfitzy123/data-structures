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
    Queue[enqueueValue] = value;  
  };

  someInstance.dequeue = function(){

    dequeueValue++;
  

    var deletedValue = Queue[dequeueValue]

    delete Queue[dequeueValue];
    sizeOfQueue--; 

    return deletedValue;

  };

  someInstance.size = function(){

    counter = 0;

    for (var key in Queue) {
      
      counter++
    } 
    return counter  
    
  };

  return someInstance;
};
