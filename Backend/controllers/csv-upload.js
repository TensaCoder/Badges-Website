const multer = require('multer');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const csvParser = require('csv-parser');
const User = require('../models/userSchema');

const uploadCSV = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No CSV file provided.');
        }
        const users = [];
        const tempPath = req.file.path;
        fs.createReadStream(tempPath)
            .pipe(csvParser())
            .on('data', async (row) => {
                // Check that all required fields are set
                if (!row.userid || !row.username || !row.dob || !row.email || !row.phone_number || !row.badge_name) {
                    console.error(`Missing required fields for user: ${JSON.stringify(row)}`);
                    return;
                }
                // Convert the phone_number to a string
                row.phone_number = row.phone_number.toString();

                // split verticals
                row.verticals = row.verticals.split(',');

                // Calculate the duration
                const startDate = moment(row.start_date, 'DD-MM-YYYY');
                const endDate = moment(row.end_date, 'DD-MM-YYYY');
                const duration = endDate.diff(startDate, 'months');
                row.duration = duration;

                // Generate a random badgeid
                row.badgeid = Math.floor(1000000000 + Math.random() * 9000000000).toString();

                // Decide the badge_type
                if (duration == 1) {
                    row.badge_type = 'Bronze';
                } else if (duration == 3) {
                    row.badge_type = 'Silver';
                } else if (duration <= 12) {
                    row.badge_type = 'Gold';
                } else {
                    row.badge_type = 'TBD';
                }

                // Save the user to the database
                const newUser = new User(row);
                console.log(newUser);
                users.push(newUser);
                await newUser.save();
            })
            .on('end', async () => {
                // Delete the temporary file
                fs.unlinkSync(tempPath);
                res.status(200).send(`CSV file processed and ${users.length} users saved to the database.`);
            });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing CSV file.');
    }
}
module.exports = { uploadCSV };