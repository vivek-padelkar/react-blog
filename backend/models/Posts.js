import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    username: {
      type: String,
    },
    categories: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model('Post', postSchema)
export default Post
