import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Your full name name is required'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company',
      required: [true, "The company you belong to doesn't exist"]
    },

    project: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
      }
    ],

    jobDescription: String,

    billingMethod: {
      type: String,
      enum: ['invoice', 'salary']
    },

    allowedTime: {
      type: String,
      default: '1d'
    },

    overTime: { type: Boolean },

    role: {
      type: String,
      default: 'staff',
      enum: ['staff', 'admin']
    }
  },
  { timestamps: true }
)

const StaffModel = mongoose.model('staff', staffSchema)

export default StaffModel
