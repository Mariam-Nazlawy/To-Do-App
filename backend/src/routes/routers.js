const express = require('express');
const authRoutes = require('./auth');
const tasksRoutes = require('./tasks');
const auth = require('../controller/authMiddleware')


const router = express.Router();

router.use('/auth', authRoutes);
router.use('/tasks', auth, tasksRoutes);
module.exports = router;
