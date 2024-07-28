const mongoose = require('mongoose')

const connectDB = async (url) => {
    try {
       await mongoose.connect(url)
    } 
    catch (error) {
        throw error;
    } 
          
          
} 

module.exports = connectDB;