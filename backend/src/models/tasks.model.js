const mongoose = require('mongoose');
const TaskSchema = new  mongoose.Schema(
    {
        name: {
            type: String,
            required:  [true, "Please enter task name"]
        },
        
        description:
        {
            type: String,
        },

        due_date:
        {
            type: Date
        },
        
        priority:
        {
            type: String
        },

        completed:
        {
            type: Boolean,
            default: false  
        },

        creation_date: {
            type: Date
        },

        updated_date: {
            type: Date
        }
    }
)

module.exports = mongoose.model('Task', TaskSchema)