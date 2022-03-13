import bcrypt from 'bcrypt'

const saltRound = 10

export const getHashData = async (data) => {
  try {
    const salt = await bcrypt.genSalt(saltRound)
    const hash = bcrypt.hashSync(data, salt)
    return hash
  } catch (error) {
    throw new Error('Error while getHashData:' + error)
  }
}

export const isValidate = async (data, hash) => {
  try {
    return await bcrypt.compare(data, hash) // true
  } catch (error) {
    throw new Error('Error while isValidate:' + error)
  }
}
