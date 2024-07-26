const mongoose = require('mongoose');
const TaskSchema = new  mongoose.Schema(
    {
        user_id: {
                    type: Schema.Types.ObjectId,
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
            type: Date
        }
    }
)

module.exports = mongoose.model('Task', TaskSchema)