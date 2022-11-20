import express from "express"
const router = express.Router()
import todoController from "../controllers/todoController.js"

router
  .get("/todos", todoController.getAllTodos)
  .get("/todos/:id", todoController.getTodo, todoController.getOneTodo)
  .post("/todos", todoController.createTodo)
  .put("/todos/:id", todoController.getTodo, todoController.updateTodo)
  .delete("/todos/:id", todoController.getTodo, todoController.deleteTodo)

export default router
