import TodoModel from "../model/todoModel.js"
const getAllTodos = async (req, res) => {
  const todos = await TodoModel.find()
  res.status(200).json(todos)
  // res.status(200).json({ message: "Hello to todo app" })
}
const getOneTodo = (req, res) => {
  const { id } = req.params
  res.status(200).json({ message: `todo of ${id} is ${id}` })
}
const createTodo = async (req, res) => {
  const { id, title, todo } = req.body
  await TodoModel.create({ title: title, todo: todo })
  res.status(201).json({ id, title, todo })
}
const updateTodo = (req, res) => {
  const { id } = req.params
  const { title, todo } = req.body
  res.json({ message: `todo with ${id} ${title} ${todo}, updated ` })
}

const deleteTodo = (req, res) => {
  const { id } = req.params
  res.status(200).json({ message: `todo with ${id} deleted successfully` })
}

export default { getAllTodos, getOneTodo, createTodo, updateTodo, deleteTodo }
