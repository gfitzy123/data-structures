var Tree = function(value) {
    var newTree = {};
    newTree.value = value;

    newTree.children = [];
    extend(newTree, treeMethods)
    return newTree;
};

var extend = function(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
};

var treeMethods = {};

treeMethods.addChild = function(value) {

    var Node = Object.create(this)
    Node.value = value;
    this.value = value;

    this.children.push(Node);
};

treeMethods.contains = function(target) {

    //var current = this.children[0].value;
    for (var i = 0; i < this.children.length; i++) {
        var current = this.children[i].value
        if (current === target) {
            return true;
        } else {
            this.contains(current);
        }
    }
    return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */