const express = require("express")
const cookieParser = require("cookie-parser")

const authRoutes = require("./routes/auth.routes")

const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())

// routes
app.use("/auth", authRoutes)

module.exports = app
