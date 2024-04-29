const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://bhavya:9hFndw0WIjrumkG9@contactresponses.a0ehlwo.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = { connect };