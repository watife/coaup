import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Project name is required"],
    unique: true
  },
  
  description: String,
  
  projectManager: String,

  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company',
    required: [true, "The company you belong to doesn't exist"]
  },

}, {timestamps: true})

const ProjectModel = mongoose.model('project', projectSchema);

export default ProjectModel;