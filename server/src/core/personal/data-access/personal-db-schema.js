import mongoose from 'mongoose'

const personalSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'first name is required']
    },
    last_name: {
      type: String,
      required: [true, 'last name is required']
    }
  },
  { timestamps: true }
)

const PersonalModel = mongoose.model('personal', personalSchema)

export default PersonalModel
