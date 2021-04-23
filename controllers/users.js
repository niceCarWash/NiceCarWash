const User = require('../models/user');
exports.getUsers = async (req, res) => {
  total = await User.countDocuments();
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  res.set('X-Total-Count', 0 - 5 / total);
  User.find().exec((err, users) => {
    if (err) throw new Error(err);
    res.json(users);
  });
};
