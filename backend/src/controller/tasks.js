const Task = require('../models/tasks.model')

// create new task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Retrieve all tasks
const getTask = async (req, res) => {
    try {
       const task = await Task.find(req.body)
       res.status(201).json({ task })
    }
    catch (error) {
       res.status(500).json({ message: error.message });
    }
}


//Retrieve a specific task by ID
const getSpecificTask = async (req, res) => {
    try {
        const task = await Task.findById(req.body)
        res.status(201).json({ task })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Update a task by ID
const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.body)
        res.status(201).json({ task })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Mark a task as completed
const completeTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.body)
        res.status(201).json({ task })
    }   
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Delete a task by id
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.body)
        res.status(201).json({ task })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {
    createTask,
    getTask,
    getSpecificTask,
    updateTask,
    completeTask,
    deleteTask
}