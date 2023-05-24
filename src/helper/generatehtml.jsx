function generateHTML(node) {
    if (node === null) {
        return null
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

export default generateHTML
