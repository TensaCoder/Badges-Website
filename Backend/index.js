const express = require('express');
const csvUploadController = require('./controllers/csv-upload');
const getUserByIdController = require('./controllers/get-user');
const { connect } = require('./db');
const multer = require('multer');
const cors = require("cors");

const app = express();
app.use(cors());
connect();

let port = 8000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'csv/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

const upload = multer({ storage: storage });


app.post('/csv-upload', upload.single('files'), csvUploadController.uploadCSV);

app.get('/user/:userid', getUserByIdController.getUserById);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});