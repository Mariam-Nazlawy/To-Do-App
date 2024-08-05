const express = require('express')
const { signup,
 login,
 logout,
    resetPassword } = require('../controller/auth')
const authMiddleware = require('../controller/authMiddleware')
const authRoutes = express.Router()

authRoutes.route('/signup').post(signup)
authRoutes.route('/login').post(login)
authRoutes.route('/logout').post(authMiddleware, logout)
authRoutes.route('/reset-password').post(authMiddleware, resetPassword)


module.exports = authRoutes;