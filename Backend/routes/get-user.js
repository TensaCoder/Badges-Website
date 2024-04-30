const express = require('express');
const router = express.Router();
const getUserByIdController = require('../controllers/get-user');

router.get('/user/:userid', getUserByIdController.getUserById);

module.exports = router;