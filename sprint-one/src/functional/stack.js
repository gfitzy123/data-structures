var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var sizeOfStack = 0;
  var poppedValue = 0;

  someInstance.push = function(value){
    // Add a string to the top of object
    sizeOfStack++;

    Stack[sizeOfStack] = value;
  };

  someInstance.pop = function(){
    // Remove and return the string on the top of object

    var deletedValue = Stack[sizeOfStack]
    delete Stack[sizeOfStack]

    sizeOfStack--;
    poppedValue++;

    return deletedValue
  };

  someInstance.size = function(){
    // counts key value pairs within object

    counter = 0;

    for (var key in Stack) {  
      counter++
    } 
    return counter  
    
  };

  return someInstance;
};
