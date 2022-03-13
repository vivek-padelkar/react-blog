import express from 'express'
const router = express.Router()
import { register } from '../controllers/auth.controller.js'

//Register
router.route('/register').post(register)

export default router
