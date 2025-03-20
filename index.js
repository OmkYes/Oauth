const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const path = require("path")
require("dotenv").config()
const { protected } = require("./middleware/auth.middleware")
const app = express()

app.use(express.static("dist"))
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: true, credentials: true }))
app.use("/api/auth", require("./router/auth.routes"))
app.use("/api/todo", require("./router/todo.route"))
app.use("/api/blog", protected, require("./router/blog.router"))
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    // res.status(404).json({ message: "resource not found" })
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT, console.log("server running on port", process.env.PORT))
})