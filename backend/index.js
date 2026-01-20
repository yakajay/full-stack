const express = require("express")
const app = express()
const router = require("./routes/userRoutes")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")


dotenv.config()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.mongouri)
.then(() => {
    console.log("Db Connected");
    
})
app.use("/api/users", router)

app.listen("5100", () => { })