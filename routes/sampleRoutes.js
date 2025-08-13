const express = require('express');
const router = express.Router();
const controller = require('../controllers/sampleController');

router.get('/', controller.showHome);
router.post('/add', controller.addItem);

module.exports = router;
