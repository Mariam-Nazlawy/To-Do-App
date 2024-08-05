const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
        userId: {
                    type: mongoose.Types.ObjectId,
                    ref: 'User',
                    required: true
        },

        title: {
            type: String,
            required:  [true, "Please enter task name"]
        },
        
        description:
        {
            type: String,
            required: false
        },

        due_date:
        {
            type: Date,
            required: true
        },
        
        priority:
        {
            type: String,
            enum: ['low', 'medium', 'high'],
            required : false
        },

        completed:
        {
            type: Boolean,
            default: false  
        },

        creation_date: {
            type: Date,
            default: Date.now
        },

        updated_date: {
            type: Date,
            default: Date.now
        }
    }
)

module.exports = mongoose.model('Task', TaskSchema)