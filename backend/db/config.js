import mongoose from 'mongoose'

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database connected successfully : ${conn.connection.host}`)
  } catch (error) {
    console.log('Error while connnecting DB ' + error)
    process.exit(1)
  }
}

export default connectDb
