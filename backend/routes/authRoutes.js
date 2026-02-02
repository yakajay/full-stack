const express = require("express")
const authContoller = require("../controller/authController")
const router = express.Router()

router.post("/auth", authContoller.register)
router.post("/auth", authContoller.login)

module.exports = router