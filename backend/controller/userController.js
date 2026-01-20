const User = require("../models/User")

const createUser = async(req, res) => {
    try {
        const data = await User.create(req.body)
        return res.Status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

const allData = async(req, res) => {
    try {
        const allData = await User.find()
        return res.json(allData)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {createUser, allData}