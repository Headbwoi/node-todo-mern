import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  id: String,

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
