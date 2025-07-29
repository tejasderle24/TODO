## ✅ TESTING 


### ✅ 1. **GET All Todos**

* **Method**: `GET`
* **URL**: `http://localhost:5000/api/todos`

> 🔄 Returns all todos from database.

---

### ✅ 2. **POST Create a Todo**

* **Method**: `POST`
* **URL**: `http://localhost:5000/api/todos`
* **Body → JSON (raw)**:

```json
{
  "text": "Finish React Todo UI",
  "priority": "high",
  "category": "Work",
  "tags": ["react", "frontend"]
}
```

> ✅ Should return the newly created todo.

---

### ✅ 3. **PUT Update a Todo**

* **Method**: `PUT`
* **URL**: `http://localhost:5000/api/todos/<todoId>`
* **Body → JSON (raw)**:

```json
{
  "text": "Finish updated Todo app",
  "completed": true
}
```

> Replace `<todoId>` with the `_id` from the todo object you got from the GET call.

---

### ✅ 4. **DELETE a Todo**

* **Method**: `DELETE`
* **URL**: `http://localhost:5000/api/todos/<todoId>`

> 🔥 Deletes the specified todo.

---

### ✅ 5. **PUT Mark All Complete**

* **Method**: `PUT`
* **URL**: `http://localhost:5000/api/todos/action/mark-all-complete`

> ✅ Marks all todos as `completed: true`.

---

### ✅ 6. **DELETE Clear Completed Todos**

* **Method**: `DELETE`
* **URL**: `http://localhost:5000/api/todos/action/clear-completed`

> 🧹 Deletes all completed todos.

---

## 🧪 Example Todo Object Response

```json
{
  "_id": "64c75adfd387c3ef7df8fc4c",
  "text": "Finish React Todo UI",
  "completed": false,
  "priority": "high",
  "category": "Work",
  "tags": ["react", "frontend"],
  "createdAt": "2024-07-29T10:45:03.537Z",
  "updatedAt": "2024-07-29T10:45:03.537Z",
  "__v": 0
}
```

---