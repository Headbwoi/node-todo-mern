import express from "express"

const router = express.Router()

router
  .get("/todos", )
  .get("/todos/:id", )
  .post("/todos", )
  .put("/todos/:id", )
  .delete("/todos/:id", )

export default router
