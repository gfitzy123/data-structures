var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {}
  return set;
};

var setPrototype = {};
var counter = 0
setPrototype.add = function(item){
  
    counter++
    
    var value = counter

    this._storage[counter] = item;

    console.log(this._storage.counter)
};

setPrototype.contains = function(item){
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      return true
    }
  } return false
};

setPrototype.remove = function(item){
    for (var key in this._storage) {
    if (this._storage[key] === item) {
      delete this._storage[key]
    }
  } 


};

/*
 * Complexity: What is the time complexity of the above functions?
 */
