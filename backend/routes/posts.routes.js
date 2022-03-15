import express from 'express'
const router = express.Router()
import {
  createpost,
  deletePost,
  updatePost,
  getPost,
  getAllPost,
} from '../controllers/post.controller.js'
import protect from '../middleware/authMiddleware.js'

//create new post
//get new Post
router.route('/').post(protect, createpost).get(getAllPost)

//update existing post
//delete
//get
router
  .route('/:id')
  .put(protect, updatePost)
  .delete(protect, deletePost)
  .get(getPost)

export default router
