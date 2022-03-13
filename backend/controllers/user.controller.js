import asyncHandler from 'express-async-handler'
import User from '../models/Users.js'
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
