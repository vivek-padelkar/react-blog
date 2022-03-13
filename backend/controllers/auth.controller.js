import asyncHandler from 'express-async-handler'
import User from '../models/Users.js'
import { getHashData, isValidate } from '../../utils/encrypt.js'
import generateToken from '../../utils/generateToken.js'

export const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body
  const hasPassword = await getHashData(password)
  const newUser = new User({ username, email, password: hasPassword })
  const user = await newUser.save()
  res.json({ username, email, token: generateToken(user._id) })
})

export const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (user) {
    const isvalidatePwd = await isValidate(password, user.password)
    if (isvalidatePwd) {
      const { password, ...data } = user._doc
      res.json({ ...data, token: generateToken(user._id) })
    } else {
      res.status(404)
      throw new Error('Invalid Username or password')
    }
  } else {
    res.status(404)
    throw new Error('Invalid Username or password')
  }
})
