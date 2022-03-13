import dotenv from 'dotenv'
import express from 'express'
import connectDb from './db/config.js'
import authRoute from './routes/auth.routes.js'
import userRoute from './routes/users.routes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()
await connectDb()
const app = express()

app.use(express.json())

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(
    `Backend server is running: ${NODE_ENV} enivronmet,  http://localhost:${PORT}/`
  )
})
