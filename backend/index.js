import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import connectDb from './db/config.js'
import authRoute from './routes/auth.routes.js'
import userRoute from './routes/users.routes.js'
import postRoute from './routes/posts.routes.js'
import uploadRoutes from './routes/upload.routes.js'
import categoryRoute from './routes/category.routes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()
await connectDb()
const app = express()

app.use(express.json())

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/post', postRoute)
app.use('/api/category', categoryRoute)
app.use('/api/upload', uploadRoutes)

const __dirname = path.resolve()
app.use(
  '/uploads',
  express.static(path.join(__dirname, `client/public/uploads`))
)

if (process.env.NODE_ENV === 'PROD') {
  app.use(express.static(path.join(__dirname, '/client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(
    `Backend server is running: ${NODE_ENV} enivronmet,  http://localhost:${PORT}/`
  )
})
