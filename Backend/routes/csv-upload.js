const express = require('express');
const router = express.Router();
const csvUploadController = require('../controllers/csv-upload');

router.post('/csv-upload', csvUploadController.uploadCSV);

module.exports = router;