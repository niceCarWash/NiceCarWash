const User = require('../models/user');

exports.createUser = (req, res) => {
  const { picture, email } = req.user;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.status(501).json('Email already taken');
      } else {
        const newUser = new User({
          email,
          name: email.split('@')[0],
          picture,
        });
        newUser.save().then((user) => {
          console.log('USER CREATED', user);
          res.status(200).json(user);
        });
      }
    })
    .catch((err) => {
      res.status(400).send('User Create Failed');
      console.log(err);
    });
};
exports.updateUser = async (req, res) => {
  const {
    name,
    email,
    picture,
    phone,
    country,
    city,
    birthdate,
    gender,
  } = req.user;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params._id },
      {
        name,
        picture,
        phone,
        country,
        city,
        address,
        birthdate,
        gender,
        email,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(400).send('User update failed');
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
