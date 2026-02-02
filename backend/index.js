const express = require("express")
const app = express()
const router = require("./src/routes/userRoutes")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const authRouter = require("./src/routes/authRoutes")
const authMiddleWare = require("./src/middleware/middleWare")


dotenv.config()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.mongouri)
.then(() => {
    console.log("Db Connected");
    
})
app.use("/api/users", authMiddleWare, router)
app.use("/auth", authRouter)

app.listen("5100", () => { })