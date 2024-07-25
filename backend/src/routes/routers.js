const express = require('express');
const authRoutes = require('./auth');
const tasksRoutes = require('./tasks');


const router = express.Router();

router.use('/auth', authRoutes);
router.use('/tasks', tasksRoutes);
module.exports = router;
