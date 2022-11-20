import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  todo: {
    type: String,
    required: true,
  },
})

export default mongoose.model("TodoModel", todoSchema)
