const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: [true, "this email already exists"],
            required: true  
        },

        password: {
            type: String,
            required: true,
            minlength: [6, "Minimum password length is 6 characters"]
        },

        created_at: {
            type: Date,
            default: Date.now
        },

        updated_at: {
            type: Date,
            default: Date.now
        }
    }
)

UserSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
module.exports = mongoose.model('User', UserSchema)