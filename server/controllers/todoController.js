import TodoModel from "../model/todoModel.js"

// GET Gets all TODO
const getAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find()
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//GET one TODO
const getOneTodo = (req, res) => {
  const { todo } = res
  res.json(todo)
}

//POST Creates a single Todo
const createTodo = async (req, res) => {
  const todo = new TodoModel({
    title: req.body.title,
    todo: req.body.todo,
  })
  try {
    const newTodo = await todo.save()
    res.status(201).json(newTodo)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

//PUT updates a todo
const updateTodo = async (req, res) => {
  const { title, todo } = req.body

  if (title != null) {
    res.todo.title = title
  }
  if (todo != null) {
    res.todo.todo = todo
  }
  try {
    const updatedTodo = await res.todo.save()
    res.status(200).json(updatedTodo)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

//DEL: Deletes a Todo
const deleteTodo = async (req, res) => {
  try {
    await res.todo.remove()
    res.status(200).json({ message: `Todo Deleted Successfully` })
  } catch (error) {
    res.status(500).json({ message: `Oops!! ${error.message}` })
  }
}

// GET finds Todo by Id used as a middleware
const getTodo = async (req, res, next) => {
  let todo
  try {
    todo = await TodoModel.findById(req.params.id)
    if (!todo || todo == null) {
      return res.status(404).json({ message: "cant find Todo" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
  res.todo = todo
  next()
}

export default {
  getAllTodos,
  getOneTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
}
