var BinarySearchTree = function(value){
  //Binary Search Trees only have a left and right node. 
  var binaryTree = Object.create(binaryTreePrototype)

  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree
  
};

//Since we are creating the empty object with Object.create, we do not need to place methods within the
// prototype object.
var binaryTreeProtoype = {}

binaryTreePrototype.insert = function(val) {
  if (val > this.value) {
    if (this.right === null) {
        this.right = BinarySearchTree(value);
  } else {
    this.right.insert(value);
  }
} if (value < this.value) {
    if (this.left == null) {
    this.left = BinarySearchTree(value);
  } else {
    this.left.insert(value);
  }
  }
}

binaryTreePrototype.contains = function(value) {
  if (this.value === value) {
    return true
  } else if (value < this.value) {
      if (!this.left) {
        return false
      } else {
        return this.left.contains(value)
      }
  }
  
  if (value > this.value) {
    if (!this.right) {
      return false
    } else {
      return this.right.contains(value);
    }
  }
}

//Keep in mind as an interview question.

binaryTreePrototype.depthFirstLog = function(cb) {
  cb(this.value);
  
  if (this.left) this.left.depthFirstLog(cb);
  if (this.right) this.right.depthFirstLog(cb);
  
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
