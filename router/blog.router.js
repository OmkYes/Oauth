const blog = require("../controllers/blog.controller")

const route = require("express").Router()

route
    .post("/create", blog.createBlog)
    .get("/read", blog.readBlog)
    .patch("/update/:bid", blog.updateBlog)
    .delete("/delete/:bid", blog.deleteBlog)

module.exports = route