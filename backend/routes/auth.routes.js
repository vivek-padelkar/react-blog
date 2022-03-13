import express from 'express'
const router = express.Router()
import { login, register } from '../controllers/auth.controller.js'

//Register
router.route('/register').post(register)
//to login
router.route('/login').post(login)

export default router
