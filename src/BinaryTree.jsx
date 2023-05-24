function BinaryTree({ input }) {

  if (input.length === 0) {
    return ''
  }

  const binaryTreeObject = generateBinaryTree(input)
  const treeHTML = generateHTML(binaryTreeObject)

  const onNodeClick = (e) => {
    const clickedSpan = e.target

    if (clickedSpan.tagName !== 'SPAN') {
      return
    }

    // Remove previous highlighted node if there
    const highlightedElements = document.querySelectorAll('.highlight')
    highlightedElements.forEach((element) => {
      element.classList.remove('highlight')
    })
    
    // Add class to node which is clicked
    clickedSpan.classList.add('highlight')

    // Find all parents elements and add class highlight
    let currentElement = clickedSpan.parentElement
    while (currentElement.parentElement) {
      const ancestorSpan = currentElement.parentElement.querySelector('span')
      if (ancestorSpan) {
        ancestorSpan.classList.add('highlight')
      }
      currentElement = currentElement.parentElement
    }

  }

  return (
    <article className="tree">
      <div onClick={onNodeClick}>
        {treeHTML}
      </div>
    </article>
  )
}

function generateHTML(node) {
  if (node === null) {
    return ''
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
    return null
  }

  const root = { value: arr[0], left: null, right: null }

  for (let i = 1; i < arr.length; i++) {
    let currentNode = root
    let newNode = { value: arr[i], left: null, right: null }

    while (true) {
      if (arr[i] < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          break
        } else {
          currentNode = currentNode.left
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode
          break
        } else {
          currentNode = currentNode.right
        }
      }
    }
  }
  return root
}

export default BinaryTree