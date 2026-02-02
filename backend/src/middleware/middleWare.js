const jwt = require("jsonwebtoken")
const env = require("dotenv")

env.config()

const authMiddleWare = (req, res, next) => {
    try {
        const headersData = req.headers.authorization
        if(!headersData) {
            return res.status(401).json({MSG: "Token Required"})
        }
        const tokenData = headersData.split(" ")
        const decodedToken = jwt.verify(tokenData[1], process.env.SECRET_KEY)
        req.id = decodedToken.id
        next()
    } catch (error) {
        return res.status(401).json({MSG: "Invalid Token"})
    }
}

module.exports = authMiddleWare