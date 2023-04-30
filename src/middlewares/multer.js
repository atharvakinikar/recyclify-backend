const multer = require('multer');

const storage = multer.memoryStorage()

const fileParser = multer({ storage, limits: { fileSize: 40000000, files: 1 } }).single('product_image')

module.exports = { fileParser }