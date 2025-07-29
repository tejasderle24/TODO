import axios from "axios"

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api/todos"

export const getTodos = () => axios.get(API)

export const createTodo = (data) => axios.post(API, data)

export const updateTodo = (id, data) => axios.put(`${API}/${id}`, data)

export const deleteTodo = (id) => axios.delete(`${API}/${id}`)

export const markAllComplete = () => axios.put(`${API}/action/mark-all-complete`)

export const clearCompleted = () => axios.delete(`${API}/action/clear-completed`)
