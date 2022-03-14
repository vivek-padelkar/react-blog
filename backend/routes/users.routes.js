import express from 'express'
const router = express.Router()
import {
  updateUser,
  deleteUser,
  getUser,
} from '../controllers/user.controller.js'
import protect from '../middleware/authMiddleware.js'

//update user data
router
  .route('/:id')
  .put(protect, updateUser)
  .delete(protect, deleteUser)
  .get(protect, getUser)

export default router
