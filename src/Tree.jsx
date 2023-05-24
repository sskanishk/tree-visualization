function Tree({ input }) {

  if (input.length === 0) {
    return '';
  }

  const binaryTreeObject = generateBinaryTree(input)
  const treeHTML = generateHTML(binaryTreeObject)

  const clickHandler = (e) => {
    console.log("e ", e)
    console.log("get", e.target)
    console.log("get", e.currentNode)
    console.log("get", e.currentTarget)
    console.log("get", e.current)


    const clickedSpan = e.target;
    const spansBelow = Array.from(clickedSpan.parentNode.querySelectorAll('span'));
  
    const index = spansBelow.indexOf(clickedSpan);
    if (index !== -1) {
      const spansToHighlight = spansBelow.slice(index);
      spansToHighlight.forEach((span) => {
        span.classList.add('yourClassName');
      });
    }
  }

  return (
    <article className="binary-tree">
      <div onClick={clickHandler}>
        {treeHTML}
      </div>
    </article>
  )
}

function generateHTML(node) {
  if (node === null) {
    return '';
  }

  const leftHTML = generateHTML(node.left)
  const rightHTML = generateHTML(node.right)





  return (
    <>
      <span>{node.value}</span>
      <div>{leftHTML}</div>
      <div>{rightHTML}</div>
    </>
  )
}

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


export default Tree


















// function Tree() {

//   var input = [4,2,6,3,5,7]

//   if (input.length === 0) {
//     return '';
//   }

//   const rootNode = createNode(input, 0);

//   const treeHTML = generateHTML(rootNode);

//   return (
//     <article className="binary-tree">
//       <div>
//         {treeHTML}
//       </div>
//     </article>
//   )
// }

// function createNode(arr, index) {
//   if (index >= arr.length) {
//     return null;
//   }

//   const value = arr[index];
//   const leftChildIndex = 2 * index + 1;
//   const rightChildIndex = 2 * index + 2;

//   return {
//     value,
//     left: createNode(arr, leftChildIndex),
//     right: createNode(arr, rightChildIndex),
//   };
// }


// function generateHTML(node) {
//   if (node === null) {
//     return '';
//   }

//   const leftHTML = generateHTML(node.left);
//   const rightHTML = generateHTML(node.right);

//   return (
//     <>
//       <span>{node.value}</span>
//       <div>{leftHTML}</div>
//       <div>{rightHTML}</div>
//     </>
//   )
// }


// export default Tree