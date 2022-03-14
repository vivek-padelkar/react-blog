import express from 'express'
const router = express.Router()
import {
  createpost,
  deletePost,
  updatePost,
  getPost,
} from '../controllers/post.controller.js'
import protect from '../middleware/authMiddleware.js'

//create new post
router.route('/').post(protect, createpost)

//update existing post
//delete
//get
router
  .route('/:id')
  .put(protect, updatePost)
  .delete(protect, deletePost)
  .get(getPost)

// router
//   .route('/:id')
//   .put(protect, updateUser)
//   .delete(protect, deleteUser)
//   .get(protect, getUser)

export default router
