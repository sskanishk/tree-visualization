function generateBinaryTree(arr) {
    if (!arr.length) {
        return null
    }

    const root = { value: arr[0], left: null, right: null }
    const queue = [root]
    let i = 1

    while (i < arr.length) {
        const node = queue.shift()

        if (arr[i] !== null) {
            node.left = { value: arr[i], left: null, right: null }
            queue.push(node.left)
        }
        i++

        if (i < arr.length && arr[i] !== null) {
            node.right = { value: arr[i], left: null, right: null }
            queue.push(node.right)
        }
        i++
    }

    return root
}

export default generateBinaryTree