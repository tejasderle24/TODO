### Frontend API Endpoints

| Action                | Method | Endpoint                              |
| --------------------- | ------ | ------------------------------------- |
| Get All Todos         | GET    | `/api/todos`                          |
| Add New Todo          | POST   | `/api/todos`                          |
| Update Todo by ID     | PUT    | `/api/todos/:id`                      |
| Delete Todo by ID     | DELETE | `/api/todos/:id`                      |
| Mark All as Complete  | PUT    | `/api/todos/action/mark-all-complete` |
| Clear Completed Todos | DELETE | `/api/todos/action/clear-completed`   |