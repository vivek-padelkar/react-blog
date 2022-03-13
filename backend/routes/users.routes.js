import express from 'express'
const router = express.Router()
import { updateUser } from '../controllers/user.controller.js'
import protect from '../middleware/authMiddleware.js'

//update user data
router.route('/:id').put(protect, updateUser)

export default router
