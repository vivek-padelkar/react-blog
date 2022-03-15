import Post from '../models/Posts.js'
import asyncHandler from 'express-async-handler'

export const createpost = asyncHandler(async (req, res) => {
  req.body.username = req.user.username
  const newPost = new Post(req.body)
  const savedPost = await newPost.save()
  res.json(savedPost)
})

export const updatePost = asyncHandler(async (req, res) => {
  const checkPost = await Post.findById(req.params.id)

  if (checkPost) {
    if (checkPost.username === req.user.username) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      )
      res.json(updatedPost)
    } else {
      res.status(401)
      throw new Error('Sorry, you are not authorized to perform this operation')
    }
  } else {
    res.status(401)
    throw Error('Post not found to Update')
  }
})

export const deletePost = asyncHandler(async (req, res) => {
  const checkPost = await Post.findById(req.params.id)

  if (checkPost) {
    if (checkPost.username === req.user.username) {
      await Post.findByIdAndDelete(req.params.id)
      res.json({ message: 'Post deleted successfully!' })
    } else {
      res.status(401)
      throw new Error('Sorry, you are not authorized to perform this operation')
    }
  } else {
    res.status(401)
    throw Error('Post not found to Update')
  }
})

export const getPost = asyncHandler(async (req, res) => {
  const checkPost = await Post.findById(req.params.id)
  if (checkPost) {
    res.json(checkPost)
  } else {
    res.status(401)
    throw Error('Post not found')
  }
})

export const getAllPost = asyncHandler(async (req, res) => {
  const username = req.query.user
  const cat = req.query.cat
  let posts = ''
  if (username) {
    posts = await Post.find({ username })
  } else if (cat) {
    posts = await Post.find({
      categories: {
        $in: [cat],
      },
    })
  } else {
    posts = await Post.find()
  }
  res.json(posts)
})
