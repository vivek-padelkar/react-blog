import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  try {
    return jwt.sign({ id }, process.env.SECRET, {
      expiresIn: '10d',
    })
  } catch (error) {
    throw new Error('error while generating token:' + error)
  }
}

export default generateToken
