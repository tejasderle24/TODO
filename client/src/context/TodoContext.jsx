import { createContext, useContext, useEffect, useState } from "react"
import * as api from "@/api"

const TodoContext = createContext()

export const useTodos = () => useContext(TodoContext)

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTodos = async () => {
    setLoading(true)
    try {
      const res = await api.getTodos()
      setTodos(res.data)
    } catch (err) {
      console.error("Failed to load todos", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const addTodo = async (todoData) => {
    const res = await api.createTodo(todoData)
    setTodos((prev) => [res.data, ...prev])
  }

  const updateTodoById = async (id, updates) => {
    const res = await api.updateTodo(id, updates)
    setTodos((prev) => prev.map((t) => (t._id === id ? res.data : t)))
  }

  const deleteTodoById = async (id) => {
    await api.deleteTodo(id)
    setTodos((prev) => prev.filter((t) => t._id !== id))
  }

  const markAllDone = async () => {
    await api.markAllComplete()
    fetchTodos()
  }

  const clearCompletedTodos = async () => {
    await api.clearCompleted()
    fetchTodos()
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        addTodo,
        updateTodoById,
        deleteTodoById,
        markAllDone,
        clearCompletedTodos,
        fetchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
