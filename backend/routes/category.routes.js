import express from 'express'
const router = express.Router()
import protect from '../middleware/authMiddleware.js'
import {
  createNewCategory,
  getCategory,
  getUserCat,
} from '../controllers/category.controller.js'

//create new category
//get category
router.route('/').post(protect, createNewCategory).get(protect, getCategory)

router.route('/getusercat').get(protect, getUserCat)
export default router
