# Todo App

## 📌 Overview
The **Todo App** is a simple task management application that allows users to create, manage, and track their daily tasks efficiently. Built using **Node.js**, **Express**, and **MongoDB**, this app provides RESTful APIs for managing todos.

## 🚀 Features
- ✅ Create new tasks
- 📋 View all tasks
- ✏️ Update tasks
- ❌ Delete tasks
- 🔍 Search tasks
- 📡 REST API with JSON responses

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Version Control:** Git
- **Hosting:** Render (or any cloud provider)

## 📂 Project Structure
```
TodoApp/
│── controllers/        # Route handlers
│── models/            # Mongoose models
│── routes/            # API routes
│── config/            # Configuration files
│── middleware/        # Middleware functions
│── package.json       # Dependencies and scripts
│── server.js          # Entry point
```

## ⚙️ Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Set Up Environment Variables
Create a **.env** file and configure your MongoDB connection:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
### 4️⃣ Start the Server
```sh
npm start
```
The server will run at **https://todoapp-m7sy.onrender.com/**.
Or you can run at in your local system https://localhost:3000/api/v1

## 📡 API Endpoints
| Method | Endpoint                | Description        |
|--------|-------------------------|--------------------|
| POST   | `/api/v1/createTodo`    | Create a new todo |
| GET    | `/api/v1/getTodos`      | Get all todos     |
| GET    | `/api/v1/getTodoById/:id` | Get a todo by ID |
| PUT    | `/api/v1/updateTodo/:id` | Update a todo   |
| DELETE | `/api/v1/deleteTodo/:id` | Delete a todo   |

## 📝 Contributing
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## 🛡️ License
This project is licensed under the **MIT License**.

## 🤝 Contact
For any queries, feel free to reach out:
- **Email:** your.email@example.com
- **GitHub:** [yourusername](https://github.com/yourusername)

---
⭐ *If you like this project, give it a star on GitHub!*

