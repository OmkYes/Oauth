const jwt = require("jsonwebtoken")
exports.protected = (req, res, next) => {
    try {
        const token = req.cookies.USER
        if (!token) {
            res.status(401).json({ message: "no cookie found" })
        }
        jwt.verify(token, process.env.JWT_KEY, (err, data) => {
            if (err) {
                return res.status(401).json({ message: "invalid token" })

            }
            console.log(data);

            req.user = data._id
            next()
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error: error.message })


    }
}