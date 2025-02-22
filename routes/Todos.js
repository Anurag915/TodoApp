const express = require("express");
const router = express.Router();

//import controller

const { createTodo } = require("../controller/createTodo");
const { getTodo, getTodoById } = require("../controller/getTodo");
const { updateTodo } = require("../controller/updateTodo");
const {deleteTodoById}=require('../controller/deleteTodo');
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodoById/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id",deleteTodoById);
module.exports = router;
