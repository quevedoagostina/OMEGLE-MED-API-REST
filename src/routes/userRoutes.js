const express = require('express');
const { createUser, getUsers, getUserById } = require('../controllers/userController');
const router = express.Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);

module.exports = router;
