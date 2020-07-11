import mongoose from 'mongoose'

const authSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false
    },
    user_type: {
      type: String,
      required: [true, 'User type is required']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    }
  },
  { timestamps: true }
)

const AuthModel = mongoose.model('auth', authSchema)

export default AuthModel
