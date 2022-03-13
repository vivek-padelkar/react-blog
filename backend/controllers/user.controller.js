import asyncHandler from 'express-async-handler'
import User from '../models/Users.js'
import { getHashData, isValidate } from '../../utils/encrypt.js'

//update user
export const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body
  const hasPassword = await getHashData(password)
  const newUser = new User({ username, email, password: hasPassword })
  const user = await newUser.save()
  res.json({ username, email })
})

//delete user 
