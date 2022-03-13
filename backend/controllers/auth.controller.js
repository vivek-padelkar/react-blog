import asyncHandler from 'express-async-handler'
import User from '../models/Users.js'

export const register = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body
    const newUser = new User({ username, email, password })
    const user = await newUser.save()
    res.json({
      user,
    })
  } catch (err) {
    res.status(500)
    throw new Error(err)
  }
})
