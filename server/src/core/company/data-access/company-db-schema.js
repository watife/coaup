import mongoose from 'mongoose'

const companySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: [true, "Company's name is required"],
      unique: true
    },
    company_address: {
      type: String,
      required: [true, 'Address is required']
    },
    billing_method: {
      type: String,
      required: [true, 'Billing Method is required']
    },
    auth: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'auth',
      required: [true, "The user doesn't exist"]
    }
  },
  { timestamps: true }
)

const CompanyModel = mongoose.model('company', companySchema)

export default CompanyModel
