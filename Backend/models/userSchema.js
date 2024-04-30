const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userid: { type: String, required: true },
    username: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: Number, required: true },
    role_title: { type: String },
    badge_name: { type: String, required: true },
    verticals: { type: [String], required: true },
    start_date: { type: String, required: true },
    end_date: { type: String, required: true },
    duration: { type: Number, required: true },
    badgeid: { type: String, required: true },
    badge_type: { type: String, requried: true },
    recommendations: String,
});

userSchema.set('timestamps', true);

module.exports = mongoose.model('User', userSchema);
