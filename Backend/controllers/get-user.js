const User = require('../models/userSchema');

const getUserById = async (req, res) => {
    try {
        const userId = req.params.userid;
        console.log(userId)
        const user = await User.find({ userid: req.params.userid });
        console.log(user)
        if (!user) {
            return res.status(400).send('User Not Found');
        }
        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        return res.status(500).send('Error Retreiving User');
    }
};

module.exports = { getUserById };