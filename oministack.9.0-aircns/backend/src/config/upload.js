const multer = require('multer');
const path = require('path');


module.exports = {
    storage: multer.diskStorage({
        //legal utilizando este comando ele não precisa ../
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            cb(null, `¨${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
        }
    }),
};