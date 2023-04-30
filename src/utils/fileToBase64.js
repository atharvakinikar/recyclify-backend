function fileToBase64(file) {
    const data = file.buffer.toString('base64')
    return `data:${file.mimetype};base64,${data}`
}

module.exports = { fileToBase64 }