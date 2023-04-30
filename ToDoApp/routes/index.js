const express = require('express');
const router = express.Router();

const appController = require('../controllers/app_controller')

// Redirectiong based on routes
router.get('/', appController.listData);
router.post('/create-task', appController.createTask);
router.post('/delete-tasks', appController.deleteTasks);

module.exports = router;