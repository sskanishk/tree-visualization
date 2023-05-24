var arr = [4,2,6,3,5,7]

function generateBinaryTree(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    const root = { value: arr[0], left: null, right: null };
  
    for (let i = 1; i < arr.length; i++) {
      let currentNode = root;
      let newNode = { value: arr[i], left: null, right: null };
  
      while (true) {
        if (arr[i] < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  
    return root;
  }

console.log(generateBinaryTree(arr))
  


function createTree(arr) {
    for (var i = 1; i < arr.length; i++) {
        nodeDirection(arr[0], arr[i])
    }
    console.log("arr ", arr)
    let t = createData(arr[0])
    console.log('arr ', arr)
    console.log("t ", t)
}

// createTree(arr)

function nodeDirection(root, node) {
    console.log("root ", root)
    var a = Number(node.value)
    var b = Number(root.value)
    if (a < b) {
        if (root.left == null) {
            root.left = node;
            node.isLeft = true;
        } else {
            nodeDirection(root.left, node);
        }
    } else if (a > b) {
        if (root.right == null) {
            root.right = node;
            node.isRight = true
        } else {
            nodeDirection(root.right, node);
        }
    }

}


function createData(node) {

    if (node == null) { return }

    if (node.left) {
        node.children.push(node.left);
        node.left.parent = node;
        if (!node.right) {
            let newNode = new Node("Empty", null, null)
            newNode.isRight = true
            node.children.push(newNode);
            newNode.parent = node
        }

    }

    if (node.right) {
        node.children.push(node.right);
        node.right.parent = node;
        if (!node.left) {
            let newNode = new Node("Empty", null, null)
            newNode.isLeft = true
            node.children.unshift(newNode);
            newNode.parent = node
        }
    }

    createData(node.left);
    createData(node.right);

}