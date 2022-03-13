import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/Users.js'

const protect = asyncHandler(async (req, res, next) => {
  let token = ''
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
    const { id } = jwt.decode(token, process.env.SECRET)
    if (id) {
      req.user = await User.findById(id).select('-password')
      next()
    } else {
      throw new Error('Not authorize')
    }
  } else {
    throw new Error('Not authorize')
  }
})

export default protect
