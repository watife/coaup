import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'staff',
  },

  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company',
  },

  date: {
    type: Date,
    default: Date.now,
    required: [true, "Date is required"]
  },

  events: {
    type: Array,
    required: [true, "The company you belong to doesn't exist"]
  },

}, {timestamps: true})

const EventModel = mongoose.model('event', eventSchema);

export default EventModel;
