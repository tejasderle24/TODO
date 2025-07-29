import Todo from "../models/todo.model.js"

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 })
    res.json(todos)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" })
  }
}

export const createTodo = async (req, res) => {
  const { text, priority, category, tags } = req.body
  try {
    const todo = new Todo({ text, priority, category, tags })
    await todo.save()
    res.status(201).json(todo)
  } catch (err) {
    res.status(400).json({ error: "Failed to create todo" })
  }
}

export const updateTodo = async (req, res) => {
  const { id } = req.params
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true })
    res.json(updatedTodo)
  } catch (err) {
    res.status(400).json({ error: "Failed to update todo" })
  }
}

export const deleteTodo = async (req, res) => {
  const { id } = req.params
  try {
    await Todo.findByIdAndDelete(id)
    res.json({ message: "Todo deleted" })
  } catch (err) {
    res.status(400).json({ error: "Failed to delete todo" })
  }
}

export const markAllComplete = async (req, res) => {
  try {
    await Todo.updateMany({}, { completed: true })
    res.json({ message: "All todos marked as complete" })
  } catch (err) {
    res.status(500).json({ error: "Failed to mark all as complete" })
  }
}

export const clearCompleted = async (req, res) => {
  try {
    await Todo.deleteMany({ completed: true })
    res.json({ message: "Completed todos cleared" })
  } catch (err) {
    res.status(500).json({ error: "Failed to clear completed todos" })
  }
}
