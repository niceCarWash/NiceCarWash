const User = require('../models/user');

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;

  const user = await User.findOneAndUpdate(
    { email },
    { name: email.split('@')[0], picture },
    { new: true }
  );
  if (user) {
    console.log('USER UPDATED', user);
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      name: email.split('@')[0],
      picture,
    }).save();
    console.log('USER CREATED', newUser);
    res.json(newUser);
  }
};
exports.currentUser = async (req, res) => {
  User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.findOneAndDelete({ _id: req.params._id });
    res.json(
      `Deleted Successfully!! We're sorry to see you leave Mr.  ${deleted.name}!`
    );
  } catch (err) {
    console.log(err);
    res.status(400).send('User delete failed');
  }
};

exports.createOrUpdateUserProfile = async (req, res) => {
  const { fullName, country, city, address, phone, birthdate } = req.body.e;
  const { email, picture } = req.user;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { name: fullName, picture, country, city, address, phone, birthdate },
      { new: true }
    );
    if (user) {
      console.log('USER PROFILE UPDATED', user);
      res.json(user);
    }
  } catch (error) {
    res.json(error);
  }
};
