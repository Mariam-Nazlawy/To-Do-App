const express = require('express');
const authRoute = express.Router(); 
authRoute.use(express.json()); // allow server to use json file

let users = [
    { userId: 1, email: 'kjskfj@ljf.com', password: '12235' },
    { userId: 2, email: 'sandykfj@ljf.com', password: 'porkk' },
    { userId: 3, email: 'hany@gmail.com', password: 'lkmdsflk' },
    { userId: 4, email: 'mai@ljf.com', password: 'lkqekp' }

]

authRoute.post('/auth/signup', (req, res) => {
    // validate email and password using joi

    // create schema 

    // validte the input with the schema
    
    // if valid add to database 
    
    // else return an error massage
       
})

authRoute.post('/auth/login', (req, res) => {
    req.body.email;
    req.body.password;
})

authRoute.post('/auth/logout', (req, res) => {
    
})

authRoute.post('/auth/reset-password', (req, res) => {
    
})

module.exports = authRoute;