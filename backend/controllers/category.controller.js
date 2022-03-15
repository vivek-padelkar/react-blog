import asynchHandler from 'express-async-handler'
import Category from '../models/Category.js'

export const createNewCategory = asynchHandler(async (req, res) => {
  const newCategory = new Category(req.body)
  const category = await newCategory.save()
  res.json(category)
})

export const getCategory = asynchHandler(async (req, res) => {
  const category = await Category.find()
  res.json(category)
})
