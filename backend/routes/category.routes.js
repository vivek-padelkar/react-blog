import express from 'express'
const router = express.Router()
import protect from '../middleware/authMiddleware.js'
import {
  createNewCategory,
  getCategory,
} from '../controllers/category.controller.js'

//create new category
//get category
router.route('/').post(protect, createNewCategory).get(protect, getCategory)

export default router
