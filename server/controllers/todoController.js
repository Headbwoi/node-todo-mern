const getAllTodos = (req, res) => {
  res.status(200).json({ message: "Hello to todo app" })
}
const getOneTodo = (req, res) => {
  const { id } = req.params
  res.status(200).json({ message: `todo of ${id} is ${id}` })
}
const createTodo = (req, res) => {
  const { id, title, todo } = req.body
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
