const express = require("express")
const app = express()
const router = require("./routes/userRoutes")
const mongoose = require("mongoose")
const dotenv = require("dotenv")


dotenv.config()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.mongouri)
.then(() => {
    console.log("Db Connected");
    
})
app.get("/api/users", router)

app.listen("5100", () => { })