const express = require('express');
const tasksRoutes = express.Router();

// create new task
tasksRoutes.post('/', (req, res) => {
    
})

//  Retrieve all tasks for the authenticated user
tasksRoutes.get('/', (req, res) => {
    res.send("hello from tasks endpoint!");
})

// Retrieve a specific task by ID
tasksRoutes.get('/:id', (req, res) => {
    
})

//  Update a task by ID
tasksRoutes.put('/:id', (req, res) => {
    
})

// Mark a task as completed
tasksRoutes.patch('/:id/complete', (req, res) => {

})

module.exports = tasksRoutes;