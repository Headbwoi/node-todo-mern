import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  id: String,

  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
})

export default mongoose.model("TodoSchema", todoSchema)
