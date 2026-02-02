const Auth = require("../models/authModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const env = require("dotenv")

env.config()

exports.register = async (req, res) => {
    const { username, email, password } = res.body
    try {
        const user = await Auth.findOne({email})
        if (user) {
            return res.status(401).json({MSG: "Email Exists"})
        }
        const hashPassword = await bcrypt.compare(password, 10)
        const data = await Auth.create({
            username, email, password: hashPassword
        })
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res) => {
    const { email, password } = res.body
    try {
        const user = await Auth.findOne({email})
        if (!user) {
            return res.status(401).json({MSG: "Email not Found"})
        }
        const userMap = await bcrypt.compare(password, user.password)
        if (!userMap) {
            return res.status(401).json({MSG: "Invalid Credentials"})
        }
        const jwtToken = jwt.sign(
            {id: user._id}, process.env.SECRET_KEY, {expiresIn: "1h"}
        )
        res.json(jwtToken)
    } catch (error) {
        console.log(error);
    }
}