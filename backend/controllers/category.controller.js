import asynchHandler from 'express-async-handler'
import Category from '../models/Category.js'
import User from '../models/Users.js'
import Post from '../models/Posts.js'

export const createNewCategory = asynchHandler(async (req, res) => {
  const newCategory = new Category(req.body)
  const category = await newCategory.save()
  res.json(category)
})

export const getCategory = asynchHandler(async (req, res) => {
  const category = await Category.find()
  res.json(category)
})

export const getUserCat = asynchHandler(async (req, res) => {
  const cat = await Post.find({})
    .populate('categories')
    .where('username')
    .equals(req.query.username)

  const catArr = []
  if (cat.length > 0) {
    for (let i = 0; i < cat.length; i++) {
      const { categories, ...data } = cat[i]._doc
      catArr.push(...categories)
    }
  }
  res.json({ cat: catArr })
})
