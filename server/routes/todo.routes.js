import express from "express"
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  markAllComplete,
  clearCompleted,
} from "../controllers/todo.controller.js"

const router = express.Router()

router.get("/", getTodos)
router.post("/", createTodo)
router.put("/:id", updateTodo)
router.delete("/:id", deleteTodo)
router.put("/action/mark-all-complete", markAllComplete)
router.delete("/action/clear-completed", clearCompleted)

export default router
