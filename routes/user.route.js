const express = require('express');
const { registerController, getAllUsersController} = require('../controllers/user.controller');

const router = express.Router();

// Register route
router.post('/register', (req, res) => {
  // The db is now available in req.db
  registerController(req, res, req.db);
});


router.get('/users', (req, res) => {
  getAllUsersController(req, res, req.db)
})

module.exports = router;
