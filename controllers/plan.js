const Plan = require('../models/plans');

exports.create = async (req, res) => {
  try {
    const { planTitle, planFeatures, planPrice } = req.body;
    const newPlan = await new Plan({
      planTitle,
      planPrice,
      planFeatures,
    }).save();
    res.send(newPlan);
  } catch (err) {
    const newError = new Error(err)
    newError.status = 400
    next(newError)
  }
};

exports.list = async (req, res) => {
  try {
    total = await Plan.countDocuments();
    res.header('content-range', `Plan 0-10}/${total}`);
    const plans = await Plan.find({}).sort({ createdAt: -1 }).exec()
    res.json(plans)
    
  } catch (error) {
    const newError = new Error(error)
    newError.status = 400
    next(newError)
  }
 
};
exports.read = async (req, res) => {
  try {
    let plan = await Plan.findOne({ _id: req.params.id }).exec();
  res.json(plan);
  } catch (error) {
    const newError = new Error(error)
    newError.status = 400
    next(newError)
  }
  
};

exports.update = async (req, res) => {
  const { planTitle, planFeatures, planPrice } = req.body;
  const { id } = req.params;
  try {
    const updated = await Plan.findOneAndUpdate(
      { _id: id },
      { planTitle, planFeatures, planPrice, _id: id },
      { upsert: true }
    );
    res.json({ data: updated });
  } catch (err) {
    const newError = new Error(err)
    newError.status = 400
    next(newError)
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Plan.findOneAndDelete({
      _id: req.params.id,
    });
    console.log(deleted);
    res.send(deleted);
  } catch (err) {
    const newError = new Error(err)
    newError.status = 400
    next(newError)
  }
};
