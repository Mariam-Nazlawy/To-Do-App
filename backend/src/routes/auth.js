const express = require('express');
const authRoutes = express.Router(); 
const joi = require('joi');
//authRoute.use(express.json()); // allow server to use json file

let users = [
    { userId: 1, email: 'kjskfj@ljf.com', password: '12235' },
    { userId: 2, email: 'sandykfj@ljf.com', password: 'porkk' },
    { userId: 3, email: 'hany@gmail.com', password: 'lkmdsflk' },
    { userId: 4, email: 'mai@ljf.com', password: 'lkqekp' }

]

authRoutes.post('/signup', (req, res) => {
    // validate email and password using joi
    
    // create schema 
    const schema = joi.object().keys({
        email: joi.string().trim().email().required(),
        password: joi.string().min(6).max(8).required()
    });


    // validte the input with the schema
    const validation = schema.validate(req.body); 

    // if invalide send error message
    if (validation.error)
        res.send(validation.error.message);
        
    // if valid add to the database and send confirmation message 
    else {
        const user = {
            userId: users.length + 1,
            email: req.body.email,
            password: req.body.password
        };
        users.push(user);

         res.send("signed up successfully!");
         console.log(validation);
        
    }
    console.log(users);
       
})



authRoutes.post('/auth/login', (req, res) => {
    req.body.email;
    req.body.password;
})

authRoutes.post('/auth/logout', (req, res) => {
    
})

authRoutes.post('/auth/reset-password', (req, res) => {
    
})

module.exports = authRoutes;