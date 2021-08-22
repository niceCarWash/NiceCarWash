const Plan = require("../models/plans");
const slugify = require("slugify");
exports.create = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.title);
    const newPlan = await new Plan(req.body).save();
    res.send(newPlan);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.listAll = async (req, res) => {
  let plans = await Plan.find({})
    .limit(parseInt(req.params.count))
    .populate("category")
    .populate("features")
    .sort([["createdAt", "desc"]])
    .exec();
  res.json(plans);
};

exports.read = async (req, res) => {
  const plan = await Plan.findOne({ slug: req.params.slug })
    .populate("category")
    .populate("features")
    .exec();
  res.json(plan);
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Plan.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.staus(400).send("Plan delete failed");
  }
};

exports.update = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updated = await Plan.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log("PLAN UPDATE ERROR ----> ", err);
    // return res.status(400).send("Product update failed");
    res.status(400).json({
      err: err.message,
    });
  }
};
