import express from "express"
const router = express.Router()
import todoController from "../controllers/todoController.js"

router
  .get("/todos", todoController.getAllTodos)
  .get("/todos/:id", todoController.getOneTodo)
  .post("/todos", todoController.createTodo)
  .put("/todos/:id", todoController.updateTodo)
  .delete("/todos/:id", todoController.deleteTodo)

export default router
