var BinarySearchTree = function(value) {
    var binaryTree = Object.create(binaryTreePrototype)
    binaryTree.value = value;
    binaryTree.left = null;
    binaryTree.right = null;
    return binaryTree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(val) {

    //var currentValue = this.value

    if (val < this.value) {
        if (this.left === null) {
            var treeLeft = BinarySearchTree(val);
            treeLeft.value = val;
            this.left = treeLeft;
        } else if (this.left !== null) {
                BinarySearchTree.insert(this.left)
        }
    } else if (val > this.value) {
        if (this.right === null) {
            //this.right = val;
            var treeRight = BinarySearchTree(val);
            treeRight.value = val;
            this.right = treeRight;
        } else if (this.right !== null) {
                BinarySearchTree.insert(this.right)
        }
    }
    //currentValue = val;
}


binaryTreePrototype.contains = function(val) {

    //how do you select node with node.value of 5? { value: 5, left: null}

    // for (var key in obj) {
    //     if (obj[key] == val) {
    //         return true
    //     } else if (val > obj[value]) {
    //         obj.contains(this.right)
    //         //run cotains on Node with this.right
    //     } else if (val < obj[value]) {
    //         obj.contains(this.left)
    //     }
    // }


}

binaryTreePrototype.depthFirstLog = function(val) {
    {

    }
}



/*
 * Complexity: What is the time complexity of the above functions?
    0(log(n))
 */