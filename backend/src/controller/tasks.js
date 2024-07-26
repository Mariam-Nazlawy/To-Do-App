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
const getTask = (req, res) => {
    res.json("get task function");
}


//Retrieve a specific task by ID
const getSpecificTask = (req, res) => {
    res.json({id: req.params.id});
}


//Update a task by ID
const updateTask = (req, res) => {
    res.send("update task function");
}


// Mark a task as completed
const completeTask = (req, res) => {
    res.send("complete task function");
}


// Delete a task by id
const deleteTask = (req, res) => {
    res.send("delete task function");
}



module.exports = {
    createTask,
    getTask,
    getSpecificTask,
    updateTask,
    completeTask,
    deleteTask
}