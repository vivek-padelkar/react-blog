import asyncHandler from 'express-async-handler'
import User from '../models/Users.js'
import Post from '../models/Posts.js'
import { getHashData } from '../../utils/encrypt.js'

//update user
export const updateUser = asyncHandler(async (req, res) => {
  if (req.user._id.toString() === req.params.id) {
    if (req.body.password) {
      req.body.password = await getHashData(req.body.password)
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    )
    const { password, ...data } = updatedUser._doc
    res.json(data)
  } else {
    res.status(401)
    throw new Error('Sorry, you are not authorized to perform this operation')
  }
})

//delete user
export const deleteUser = asyncHandler(async (req, res) => {
  if (req.user._id.toString() === req.params.id) {
    const user = await User.findById(req.params.id)
    if (user) {
      await Post.deleteMany({ username: user.username })
      await User.findByIdAndDelete(req.params.id)
      res.json('User has been deleted')
    } else {
      res.status(401)
      throw new Error('User not found , to delete the Data. please try again')
    }
  } else {
    res.status(401)
    throw new Error('Sorry, you are not authorized to perform this operation')
  }
})

//get user
export const getUser = asyncHandler(async (req, res) => {
  if (req.user._id.toString() === req.params.id) {
    const user = await User.findById(req.params.id).select('-password -isAdmin')
    res.json(user)
    if (user) {
    } else {
      res.status(401)
      throw new Error('User not found, please try again')
    }
  } else {
    res.status(401)
    throw new Error('Sorry, you are not authorized to perform this operation')
  }
})
