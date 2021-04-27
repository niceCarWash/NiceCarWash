const User = require('../models/user');
const Order = require('../models/order');
const Plan = require('../models/plans');
const Service = require('../models/services');
exports.getUsers = async (req, res) => {
  total = await User.countDocuments();
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  res.set('X-Total-Count', 0 - 5 / total);
  User.find().exec((err, users) => {
    if (err) throw new Error(err);
    res.json(users);
  });
};

exports.createOrder = async (req, res) => {
  const { plan, service, fullName, country, city, address } = req.body.order;
  const { user_id } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { _id: user_id },
      { name: fullName, country, city, address },
      { new: true }
    );
    if (user) {
      console.log('USER UPDATED', user);
      res.json(user);
    } else {
      res.json((err) => {
        console.log(err);
      });
    }
    const newOrder = await new Order({
      orderPlan: plan,
      orderService: service,
      orderUser: user_id,
    }).save();
    console.log(newOrder);
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};

exports.listOrder = async (req, res) => {
  const id = req.params.id.replace(':', '');
  const orders = await Order.find({ orderUser: id })
    .sort({ createdAt: -1 })
    .exec();
  const { orderPlan, orderService } = orders;
  const plans = await Plan.find({ _id: orderPlan })
    .sort({ createdAt: -1 })
    .exec();
  const services = await Service.find({ _id: orderService })
    .sort({ createdAt: -1 })
    .exec();
  const { planTitle } = plans;
  const { service } = services;
  console.log(planTitle, service);
};
