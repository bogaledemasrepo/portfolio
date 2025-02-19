import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Project must have a title!"],
  },
  sourceCode: {
    type: String,
    required: [true, "Project must have a github link!"],
  },
  previewlink: {
    type: String,
    required: [true, "Project must have a preview link!"],
  },
  discription: {
    type: String,
    required: [true, "Project must have a discription!"],
  },
  tubnail: {
    type: String,
    required: [true, "Project must have a tubnail!"],
  },
});
const Projects =
  mongoose.models.Projects || mongoose.model("Projects", projectSchema);
export default Projects;
