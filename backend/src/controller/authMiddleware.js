const jwt = require('jsonwebtoken')
const User = require('../models/users.model')

const auth = async (req, res, next) => {
    //check the auth header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
         res.status(401).json("Authentication invalid")
    }

    // get the token
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(payload.userId).select('-password')
        req.user = user

        //attach the user to the tasks routes, reset-password, and logout
        req.user = { userId: payload.userId, email: payload.email }
        next()
    }
    catch (error) {
         res.status(500).json({ message: error.message })
    }
}

module.exports = auth