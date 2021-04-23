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
    console.log(err);
    res.status(400).send('Create Plan failed');
  }
};

exports.list = async (req, res) => {
  total = await Plan.countDocuments();
  res.header('content-range', `Plan 0-10}/${total}`);
  res.json(await Plan.find({}).sort({ createdAt: -1 }).exec());
};
exports.read = async (req, res) => {
  let plan = await Plan.findOne({ _id: req.params.id }).exec();
  res.json(plan);
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
    res.status(400).send('Plan update failed');
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
    res.status(400).send('Plan delete failed');
  }
};
