import express from "express"

const router = express.Router()

router
  .get("/todos", (req, res) => {
    res.status(200).json({ message: "Hello to todo app" })
  })
  .get("/todos/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({ message: `todo of ${id} is ${id}` })
  })
  .post("/todos", (req, res) => {
    const { id, title, todo } = req.body
    res.status(201).json({ id, title, todo })
  })
  .put("/todos/:id", (req, res) => {
    const { id } = req.params
    const { title, todo } = req.body
    res.json({ message: `todo with ${id} ${title} ${todo}, updated ` })
  })
  .delete("/todos/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({ message: `todo with ${id} deleted successfully` })
  })

export default router
