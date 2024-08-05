const User = require('../models/users.model')
const joi = require('joi')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const signup = async (req, res) => {
    try {
        // create validation schema 
        const schema = joi.object().keys({
            email: joi.string().trim().email().required(),
            password: joi.string().min(6).max(8).required()
        });

        // validate the input with the joi schema
        const validation = schema.validate(req.body)

        if (validation.error) {
            res.status(400).json({ msg: validation.error.message })
        }
        else {
            // else create new user in the database
            const user = await User.create({ ...req.body})
            res.status(201).json({ user })
        } 
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
   
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        // check if user exists in the db by email
        const user = await User.findOne({ email });
        
        // compare password
        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if (!user || !isPasswordMatch) {
            res.status(401).json("incorrect email or password")
        }
        else {
            const userId = user.id
            // generat token
            const token = jwt.sign({ userId, email }, process.env.JWT_SECRET, { expiresIn: "2h" })
            
            //Set token in cookie
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ message: `${email} logged in successfully`, token })
        }

    }
    catch (error){
        res.status(500).json({ message: error.message })
    }
}

const logout = async (req, res) => {
    try {
        // Clear the token cookie
        res.clearCookie('token');

        // Redirect the user to the login page
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const resetPassword = async (req, res) => {
    try {// check the token (authmiddleware)
        // get the user id and find the user
        const userId = req.user.userId
        const newPassword = req.body.password

        const user = await User.findById(userId)
        
        user.password = newPassword 
        user.save()

        console.log(newPassword)
        console.log(user.password)
       

        res.status(200).json({ message: "password changed successfully" })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    signup,
    login,
    logout,
    resetPassword
}