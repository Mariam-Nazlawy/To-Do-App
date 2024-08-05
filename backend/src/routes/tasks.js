const express = require('express');
const tasksRoutes = express.Router();
const {
    createTask,
    getTask,
    getSpecificTask,
    updateTask,
    completeTask,
    deleteTask
} = require('../controller/tasks');


// create new task & Retrieve all tasks for the authenticated user
tasksRoutes.route('/').post(createTask).get(getTask);

// Retrieve a specific task by ID & Update a task by ID & Delete task
tasksRoutes.route('/:id').get(getSpecificTask).put(updateTask).delete(deleteTask);

// Mark a task as completed
tasksRoutes.route('/:id/complete').patch(completeTask);

module.exports = tasksRoutes;