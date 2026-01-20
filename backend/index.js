const express = require("express")
const app = express()
const router = require("./routes/userRoutes")
const mongoose = require("mongoose")
const dotenv = require("dotenv")


app.get("/employeedata", (req, res) => {
    res.send("Running on Port 5100")
})

app.listen("5100", () => {
    console.log("Running on Port 5100");
})