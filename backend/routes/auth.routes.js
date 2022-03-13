import express from 'express'
const router = express.Router()
import { login, register } from '../controllers/auth.controller.js'
import protect from '../middleware/authMiddleware.js'

//Register
router.route('/register').post(register)
//to login
router.route('/login').post(protect, login)

export default router
