const Todo = require("../models/Todo")

exports.createTodo = async (req, res) => {
    try {
        await Todo.create(req.body)
        res.json({ message: "todo create succes" })
    } catch (error) {
        console.log(error)

        res.status(500).json({ message: "unable to create", error: error.message })

    }
}
exports.read = async (req, res) => {
    try {
        const result = await Todo.find(req.body)
        res.json({ message: "todo read succes", result })
    } catch (error) {
        console.log(error)

        res.status(500).json({ message: "unable to create", error: error.message })
    }
}
exports.update = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.tid, req.body)
        res.json({ message: "todo update succes" })
    } catch (error) {
        console.log(error)

        res.status(500).json({ message: "unable to create", error: error.message })
    }
}
exports.delete = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.tid)
        res.json({ message: "todo delete succes" })
    } catch (error) {
        console.log(error)

        res.status(500).json({ message: "unable to create", error: error.message })
    }
}