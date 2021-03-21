const User = require('../models/user');
exports.getUsers = async (req, res) => {
  User.find().exec((err, users) => {
    if (err) throw new Error(err);
    res.json(users);
  });
};
