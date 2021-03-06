import express from 'express'
import multer from 'multer'
import path from 'path'
const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const path = '../../client/'
    cb(null, 'client/public/uploads/')
  },
  filename(req, file, cb) {
    // console.log(
    //   `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    // )
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetype = /jpg|jpeg|png/
  const extname = filetype.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetype.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path.replace(/\\/g, '/')}`)
})

export default router
