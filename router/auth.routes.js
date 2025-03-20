const auth = require("../controllers/auth.controller")
const { protected } = require("../middleware/auth.middleware")
const route = require("express").Router()

route
    .post("/register", auth.register)
    .post("/login", auth.login)
    .post("/login-otp", auth.loginwithOtp)
    .post("/sendOtp", auth.sendOtp)
    .post("/logout", auth.logout)
    .get("/allusers", protected, auth.allUsers)
    
    .post("/login-with-google", auth.loginwithGoogle)

module.exports = route
