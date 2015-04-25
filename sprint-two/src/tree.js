var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods)
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};



var treeMethods = {};

treeMethods.addChild = function(value){



  // var Node = {};
  var Node = Object.create(this)
  Node.value = value;
  this.value = value;
  
  this.children.push(Node);
  console.log(value)
};

treeMethods.contains = function(target){

    //var current = this.children[0].value;


    for (var i = 0; i < this.children.length; i++) {
      var current = this.children[i].value
        if (current === target) {
            return true;
        }
          else {
        this.contains(current); //have to call contains method...

      }

    }
     console.log(this.children)

      return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
