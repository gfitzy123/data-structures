var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //object
  var storage = [];

};


HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket) {
    bucket = [];
    this._storage.set(i, bucket)

  }
    var found = false

  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if (tuple[0] === k) {
      tuple[1] = v
      found = true
      break;
    }
  }

  if (!found) {
    bucket.push([k, v]);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);


  var bucket = this._storage.get(i);

  if (!bucket) {
    return null
  }
    var found = false

  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if (tuple[0] === k) {
      return tuple[1]
    }
  }
  return null;

};


HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);


  var bucket = this._storage.get(i);

  if (!bucket) {
    return null
  }
  

  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if (tuple[0] === k) {
        bucket.splice(j, 1);
        return tuple[0]
    }
  }
  return null;
  
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
