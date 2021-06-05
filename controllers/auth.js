const User = require('../models/user');

exports.createOrUpdateUser = async (req, res, next) => {
  try {
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
      
  } catch (error) {
    const newError = new Error(error)
    newError.status = 400
    next(newError)
  }

};
exports.currentUser = async (req, res, next) => {
try {
  User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
  
} catch (error) {
  const newError = new Error(error)
  newError.status = 400
  next(newError)
}

};

exports.loadUsers = async (req, res, next) => {
User.find().sort({ createdAt: -1 }).exec((err, users) => {
  if (err) {
    const newError = new Error(err)
    newError.status = 400
    next(newError)
  };
  res.json(users);
});
};
exports.deleteUser = async (req, res, next) => {
try {
  const deleted = await User.findOneAndDelete({ _id: req.params._id });
  res.json(
    `Deleted Successfully!! We're sorry to see you leave Mr.  ${deleted.name}!`
  );
} catch (error) {
  const newError = new Error(error)
  newError.status(404)
  next(newError)
}
};

exports.createOrUpdateUserProfile = async (req, res, next) => {
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
  const newError = new Error(error)
  newError.status = 400
  next(newError)
}

};
