import generateHTML from "../helper/generatehtml"
import generateBinaryTree from "../logics/BinaryTree"

function BinaryTree({ input }) {

  if (input.length === 0) {
    return null
  }

  const binaryTreeObject = generateBinaryTree(input)
  const treeHTML = generateHTML(binaryTreeObject)

  const onNodeClick = (e) => {
    const clickedSpan = e.target

    if (clickedSpan.tagName !== 'SPAN') {
      return null
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

export default BinaryTree