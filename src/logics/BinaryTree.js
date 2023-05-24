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

export default generateBinaryTree