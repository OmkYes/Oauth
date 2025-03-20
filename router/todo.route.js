const todo = require("../controllers/todo.controller")

const route = require("express").Router()

route
    .post("/create", todo.createTodo)
    .get("/read", todo.read)
    .patch("/update/:tid", todo.update)
    .delete("/delete/:tid", todo.delete)

module.exports = route