const controller = require("../controller/userController")
const express = require("express")
const router = express.Router()

router.post("/dataport", controller.createUser)
router.get("/getdata", controller.allData)

module.exports = router